const {ethers} = require("ethers")
const fetch = require("node-fetch");
const compiled = require("./compiled");

const laurelsRepo = 'the-laurel/laurels';
const _volunteersMap = "https://raw.githubusercontent.com/the-laurel/laurels/main/data/volunteersMap.json";
const _laurelsMap = "https://raw.githubusercontent.com/the-laurel/laurels/main/data/laurelsMap.json";
const contractData = 'https://ipfs.io/ipfs/QmSNjQqnzTe7ra1DmgmVsQcEHTqRJXMZwW1cH9zcVfpte5';
const addresses = {
  4: '0xD6866368Fcbe89bF10aCF948bc5Eb19b01e4dF82',
}
const issueTitleRegex = /^(\[.*\])/;
const unit = 1000;
const cacheGitHubIssues = {};
let lastGitHubIssueCreatedAt = null;

const abi = compiled.output.abi;

let thelaurel;
let laurelsMap = {};
let volunteersMap = {};


laurelsMap = {
  "0x8a56885456cef1ac735c91789b54a769e819190845ae48b9d000b48d4844dbef": "Coding",
  "0x4874b7a93fb3f4abf2f19a36e68aed8c8eafe19feca19c183abb0e437cadbcfd": "Intellectual",
  "0xd5350be97891348dc5f3c1a61c3b11c79f6fbd861807b7e6426fcaa289c67f5a": "Physical",
  "0x0af8a758e2e143977c734d5e012b22d6550bc58df51be42389db46d9fcb2e2e0": "Marketing",
  "0xa7e8030f20d51298078da9ed202f23280c7cf8b6b49a999a7e9457f8f1938587": "Arbitration",
  "CL": "0x8a56885456cef1ac735c91789b54a769e819190845ae48b9d000b48d4844dbef",
  "IL": "0x4874b7a93fb3f4abf2f19a36e68aed8c8eafe19feca19c183abb0e437cadbcfd",
  "PL": "0xd5350be97891348dc5f3c1a61c3b11c79f6fbd861807b7e6426fcaa289c67f5a",
  "ML": "0x0af8a758e2e143977c734d5e012b22d6550bc58df51be42389db46d9fcb2e2e0",
  "AL": "0xa7e8030f20d51298078da9ed202f23280c7cf8b6b49a999a7e9457f8f1938587",
}
volunteersMap = {
  "0x1fB8CD37C35546FeC07A794158F4035f06f023A0": "Loredana",
  "0x0092D68117A00c6D8CC651a38522AAEEd54ba3F2": "Christian",
  "0xFDb7Af458A29bF7bF9CDa9d4cba2149F3217763c": "Feynman",

  "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266": "Loredana",
}


const getVolunteersMap = () => fetch(_volunteersMap).then(r => r.json());
const getLaurelsMap = () => fetch(_laurelsMap).then(r => r.json());
const getAbi = () => fetch(contractData).then(r => r.json()).then(r => r.output.abi);

function fetchGithub (path, q) {
  const query = Object.keys(q).map(key => `${key}=${q[key]}`).join('&');
  return fetch('https://api.github.com' + path + '?' + query).then(r => r.json());
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
  const q = {per_page: 100};
  if (lastGitHubIssueCreatedAt) q.since = lastGitHubIssueCreatedAt;
  const issues = await fetchGithub(`/repos/${laurelsRepo}/issues`, q);
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
  const comms = await fetch(issue.comments_url).then(r => r.json());
  if (comms.length == 0) return;
  const text = comms[0].body;
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
  laurelsMap,
  volunteersMap,
}
