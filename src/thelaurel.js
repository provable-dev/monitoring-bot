const {ethers} = require("ethers")
const fetch = require("node-fetch");
const compiled = require("./compiled");

const laurelsRepo = 'the-laurel/laurels';
const _volunteersMap = "https://raw.githubusercontent.com/the-laurel/laurels/main/data/volunteersMap.json";
const _laurelsMap = "https://raw.githubusercontent.com/the-laurel/laurels/main/data/laurelsMap.json";
const contractData = 'https://gateway.pinata.cloud/ipfs/QmbQHi6GoPtapXGTDhftwDDgFmUw28CRkHbbArPpBYPYfM';
const addresses = {
  9001: '0xf4986e1b3FBBc1A823878123adA9E2d359c0a596',
}
const issueTitleRegex = /^(\[.*\])/;
const unit = 1000;
const cacheGitHubIssues = {};
let lastGitHubIssueCreatedAt = null;

const abi = compiled.abi;

let thelaurel, laurelsMap;
const abbrev = {
  "CL": "Coding",
  "IL": "Intellectual",
  "PL": "Physical",
  "ML": "Marketing",
  "AL": "Arbitration",
}

const getVolunteersMap = () => fetch(_volunteersMap).then(r => r.json());
const getLaurelsMap = async (update = false) => {
  if (!update && laurelsMap) return laurelsMap;

  laurelsMap = await fetch(_laurelsMap).then(r => r.json());
  for (let addr in laurelsMap) {
    laurelsMap[laurelsMap[addr]] = addr;
  }
  for (let abv in abbrev) {
    laurelsMap[abv] = laurelsMap[abbrev[abv]];
  }
  return laurelsMap;
}
const getAbi = () => fetch(contractData).then(r => r.json()).then(r => r.output.abi);

function fetchGithub (path, q) {
  const query = Object.keys(q).map(key => `${key}=${q[key]}`).join('&');
  return fetch('https://api.github.com' + path + '?' + query).then(r => r.json()).catch(e => []);
}

async function getTheLaurel (web3, address) {
  if (!address) {
    const chainId = (await web3.provider.getNetwork()).chainId;
    address = addresses[chainId]
    if (!address) throw new Error(`The Laurel is not deployed on chainId ${chainId}. Try ${Object.keys(addresses)}`);
  }
  // const abi = await getAbi();
  const _thelaurel = new ethers.Contract(address , abi , web3.signer || web3.provider );
  thelaurel = _thelaurel;
  return _thelaurel;
}

function getTaskFromIssueTitle(issueText) {
    const extracted = issueText.match(issueTitleRegex);
    if (!extracted) return;
    const label = extracted[0].slice(0).slice(1, -1);
    const parts = label.split(' ').map(v => v.split('-'));
    if (parts.length < 1 || parts[0].length < 2) return;

    let [laurelName, amount] = parts[0];
    amount = parseInt(amount) * unit;
    const laurelid = laurelsMap[laurelName];

    const x = parts[1] ? parts[1] : 1531;
    const y = parts[2] ? parts[2] : 1000;

    return {laurelid, amount, x, y};
}

function getTaskFromIssue (issue) {
  const url = issue.html_url;
  issue.taskid = ethers.utils.solidityKeccak256(["string"], [url]);
  issue.task = getTaskFromIssueTitle(issue.title);
  return issue;
}

function displayLaurelAmount (amount) {
  const a = typeof amount === 'object' && amount.toNumber ? amount.toNumber() : amount;
  const b = a / unit;
  if (Math.floor(a / unit) == b) return b;
  return b.toFixed(3);
}

async function getTaskData (taskid) {
  if (!thelaurel) thelaurel = await getTheLaurel();
  const _task = await thelaurel.getTask(taskid);
  const task = {taskid, ..._task};
  task.winnerIndex = await thelaurel.winners(taskid);
  task.winnerOption = await thelaurel.getVotingOption(taskid, task.winnerIndex);
  task.beneficiary = task.winnerOption.beneficiary;
  return task;
}

async function findGitHubIssue (taskid) {
  if (cacheGitHubIssues[taskid]) return cacheGitHubIssues[taskid];
  const q = {per_page: 100, state: 'all'};
  if (lastGitHubIssueCreatedAt) q.since = lastGitHubIssueCreatedAt;
  const issues = await fetchGithub(`/repos/${laurelsRepo}/issues`, q);
  if (!issues || issues.length === 0) return;
  if (!(issues instanceof Array)) {
    console.warn('issues is not an array', issues);
    return;
  }
  const tasks = issues.map(v => getTaskFromIssue(v));
  for (const t of tasks) {
    cacheGitHubIssues[t.taskid] = t;
  }
  if (tasks.length > 0) {
    lastGitHubIssueCreatedAt = tasks[tasks.length - 1].created_at;
  }
  if (cacheGitHubIssues[taskid]) return cacheGitHubIssues[taskid];
}

async function findClaimUrl (issue, optionid) {
  if (!issue.comments_url) return "";
  const comms = await fetch(issue.comments_url).then(r => r.json()).catch(e => []);
  if (!comms || !(comms instanceof Array) || comms.length == 0) return;
  const claimProofComment = comms.find(v => v.body.includes('[CLAIM PROOF]'));
  const text = claimProofComment ? claimProofComment.html_url : comms[0].body;
  const hash = ethers.utils.solidityKeccak256(["string"], [text]);
  if (optionid === hash) return text;
}

module.exports = {
  getTheLaurel,
  getTaskFromIssueTitle,
  getTaskFromIssue,
  displayLaurelAmount,
  getTaskData,
  findGitHubIssue,
  findClaimUrl,
  getLaurelsMap,
  getVolunteersMap,
}
