const {getTaskData, findGitHubIssue, laurelsMap, volunteersMap} = require("./thelaurel");

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

async function monitor (web3, thelaurel, lastBlock, callback, milliseconds = 5000) {
  console.log('*****monitor START*****')
  const unsubscribe = await watchTasks(web3, thelaurel, lastBlock, async (taskEvent) => {
    const taskid = taskEvent.args.taskid;
    console.log('monitor taskid', taskid);
    const task = await getTaskData(taskid);
    console.log('monitor task', task);
    const gitHubIssue = await findGitHubIssue(taskid);
    const data = {
      ...task,
      laurelid: task.task.laurelid,
      laurel: laurelsMap[task.task.laurelid],
      organizerData: volunteersMap[task.task.organizer],
      beneficiaryData: volunteersMap[task.beneficiary],
      gitHubIssue,
      transactionHash: taskEvent.transactionHash,
    }
    callback(data);
  }, milliseconds);
  return unsubscribe;
}

module.exports = {
  monitor,
  watchTasks,
  watchEvent,
  watch,
}
