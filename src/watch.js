const {getTaskData, findGitHubIssue, findClaimUrl, getLaurelsMap, getVolunteersMap} = require("./thelaurel");

let volunteersMap = {};
let laurelsMap = {};

function watch (callback, milliseconds) {
  const intervalId = setInterval(callback, milliseconds);
  return () => clearInterval(intervalId);
}

async function watchEvent (web3, thelaurel, name, lastBlock, callback, milliseconds = 60000) {
  lastBlock = lastBlock || (await web3.provider.getBlockNumber());
  console.log('---- monitor watchEvent', name, lastBlock);
  return watch(async () => {
    console.log('monitor lastBlock', lastBlock);
    const events = await thelaurel.queryFilter(name, lastBlock);
    
    console.log('events', events.length);
    // console.log('monitor events', events);
    for (const ev of events) {
      console.log('block', ev.blockNumber);
      if (ev.blockNumber > lastBlock) await callback(ev);
    }
    if (events.length > 0) {
      lastBlock = Math.max(lastBlock, events[events.length - 1].blockNumber);
    }
  }, milliseconds);
}

function watchTasks (web3, thelaurel, lastBlock, callback, milliseconds) {
  console.log('---- monitor watchTasks');
  return watchEvent(web3, thelaurel, 'RegisterTask', lastBlock, callback, milliseconds);
}

function watchClaims (web3, thelaurel, lastBlock, callback, milliseconds) {
  console.log('---- monitor watchClaims');
  return watchEvent(web3, thelaurel, 'RegisterOption', lastBlock, callback, milliseconds);
}

function watchVotes (web3, thelaurel, lastBlock, callback, milliseconds) {
  console.log('---- monitor watchClaims');
  return watchEvent(web3, thelaurel, 'Voted', lastBlock, callback, milliseconds);
}

async function monitor (web3, thelaurel, lastBlock, callbacks, milliseconds = 5000) {
  console.log('*****monitor START*****')
  volunteersMap = await getVolunteersMap();
  laurelsMap = await getLaurelsMap();
  const unsubscribeTasks = await watchTasks(web3, thelaurel, lastBlock, async (taskEvent) => {
    volunteersMap = await getVolunteersMap();
    laurelsMap = await getLaurelsMap(true);
    const taskid = taskEvent.args.taskid;
    console.log('monitor taskid', taskid);
    const task = await getTaskData(taskid);
    console.log('monitor task', task);
    let gitHubIssue = await findGitHubIssue(taskid);
    if (!gitHubIssue && laurelsMap[taskid]) {
      gitHubIssue = {title: `Created laurel: ${laurelsMap[taskid]}`};
    }
    const data = {
      ...task,
      laurelid: task.task.laurelid,
      laurel: laurelsMap[task.task.laurelid],
      organizerData: volunteersMap[task.task.organizer],
      beneficiaryData: volunteersMap[task.beneficiary] || task.beneficiary,
      gitHubIssue,
      blockNumber:await web3.provider.getBlockNumber(),
      transactionHash: taskEvent.transactionHash,
    }
    callbacks.onTaskRegistered(data);
  }, milliseconds);
  
  const unsubscribeClaims = await watchClaims(web3, thelaurel, lastBlock, async (taskEvent) => {
    // event RegisterOption(bytes32 indexed taskid, bytes32 optionid, uint256 optionIndex);
    const {taskid, optionid, optionIndex} = taskEvent.args;
    console.log('monitor claim: taskid', taskid, optionIndex);
    const task = await getTaskData(taskid);
    let gitHubIssue = await findGitHubIssue(taskid);
    if (!gitHubIssue && laurelsMap[taskid]) {
      gitHubIssue = {title: `New coefficient for ${laurelsMap[taskid]}: ${optionid} `};
    }
    const optionUrl = await findClaimUrl(gitHubIssue, optionid);
    const optionData = await thelaurel.getVotingOption(taskid, optionIndex);
    const claimreceiver = optionData ? optionData.beneficiary : null;
    const data = {
      taskid,
      optionid,
      optionIndex,
      // ...task,
      laurelid: task.task.laurelid,
      laurel: laurelsMap[task.task.laurelid],
      claimreceiver: claimreceiver,
      winnerData: volunteersMap[task.beneficiary] || task.beneficiary,
      beneficiaryData: volunteersMap[claimreceiver] || claimreceiver,
      gitHubIssue,
      optionUrl,
      blockNumber:await web3.provider.getBlockNumber(),
      transactionHash: taskEvent.transactionHash,
    }
    callbacks.onClaim(data);
  }, milliseconds);
  
  const unsubscribeVotes = await watchVotes(web3, thelaurel, lastBlock, async (taskEvent) => {
    // event Voted(bytes32 indexed taskid, uint256 optionIndex, uint256 WL, uint256 AL, uint256 weight);
    const {taskid, optionIndex, WL, AL, weight} = taskEvent.args;
    console.log('monitor vote: taskid', taskid, optionIndex);
    const task = await getTaskData(taskid);
    let gitHubIssue = await findGitHubIssue(taskid);
    if (!gitHubIssue && laurelsMap[taskid]) {
      gitHubIssue = {title: `Vote on coefficient for ${laurelsMap[taskid]}`};
    }
    const optionData = await thelaurel.getVotingOption(taskid, optionIndex);
    const claimreceiver = optionData ? optionData.beneficiary : null;
    
    const receipt = await web3.provider.getTransactionReceipt(taskEvent.transactionHash);
    const outcomes = (receipt.logs || []).map(ev => {
      const parsedEv = thelaurel.interface.parseLog(ev);
      return parsedEv;
    }).filter(ev => ev.name === 'Outcome');
    
    const winner = outcomes.find(ev => ev.args.typeOfEvent.toNumber() == 1);
    const reverted = outcomes.find(ev => ev.args.typeOfEvent.toNumber() == 0);
    
    const data = {
      taskid,
      optionIndex,
      WL, AL, weight,
      ...task,
      laurelid: task.task.laurelid,
      laurel: laurelsMap[task.task.laurelid],
      gitHubIssue,
      claimreceiver: claimreceiver,
      blockNumber:await web3.provider.getBlockNumber(),
      voterData: volunteersMap[receipt.from] || receipt.from,
      beneficiaryData: volunteersMap[claimreceiver] || claimreceiver,
      transactionHash: taskEvent.transactionHash,
      winnerIndex: winner ? winner.args.winner.toNumber() : undefined,
      revertedIndex: reverted ? reverted.args.winner.toNumber(): undefined,
    }
    callbacks.onVote(data);
  }, milliseconds);
  
  return [unsubscribeTasks, unsubscribeClaims, unsubscribeVotes];
}

module.exports = {
  monitor,
  watchTasks,
  watchEvent,
  watch,
}
