const Discord = require("discord.js");
var Twitter = require('twitter');
const _FB = require('fb');
const {ethers} = require("ethers");
const fetch = require("node-fetch");
const { request } = require("@octokit/request");
const client = new Discord.Client()
const {getTheLaurel, displayLaurelAmount} = require("./src/thelaurel");
const {monitor} = require('./src/watch');

let thelaurel = null;
let web3 = null;
let webhook = null;

const volunteerRepo = 'the-laurel/laurels';
const address = "0xD6866368Fcbe89bF10aCF948bc5Eb19b01e4dF82"
const lastBlock = null; // 9011467  9006185; 8991065

const TOKEN = process.env.DISCORD_TOKEN;
const whtoken = process.env.DISCORD_WH_TOKEN;
const whid = process.env.DISCORD_WH_ID;
const alchemytoken = process.env.ALCHEMY_TOKEN;


const TW_MAX_CHAR = 350;
const TW_KEY = process.env.TW_KEY;
const TW_SECRET_KEY = process.env.TW_SECRET_KEY;
const TW_BEARER_TOKEN = process.env.TW_BEARER_TOKEN;
const TW_ACCESS_TOKEN = process.env.TW_ACCESS_TOKEN;
const TW_ACCESS_TOKEN_SECRET = process.env.TW_ACCESS_TOKEN_SECRET;
const twclient = new Twitter({
  consumer_key: TW_KEY,
  consumer_secret: TW_SECRET_KEY,
  access_token_key: TW_ACCESS_TOKEN,
  access_token_secret: TW_ACCESS_TOKEN_SECRET,
});

const FB_ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN;
let FB_ACCESS_TOKEN_LONG = process.env.FB_ACCESS_TOKEN_LONG;
const FB_APP_ID = process.env.FB_APP_ID;
const FB_APP_SECRET = process.env.FB_APP_SECRET;
const {FB, Facebook, FacebookApiException} = _FB;
const fboptions = {version: 'v10.0', accessToken: FB_ACCESS_TOKEN_LONG, appId: FB_APP_ID, appSecret: FB_APP_SECRET}
const fbPageID = '688583115349973';
const fbApp = new Facebook(fboptions);
// console.log('fboptions', fboptions);
// console.log('fbApp', fbApp)

if (!fboptions.accessToken) getAccessToken();

// only for triage
const GITHUB_PERSONAL_TOKEN = process.env.GITHUB_PERSONAL_TOKEN;

const authorizedGithubRequest = request.defaults({
    headers: {
      authorization: `token ${GITHUB_PERSONAL_TOKEN}`,
    },
});

async function getAccessToken() {
  const url = `https://graph.facebook.com/${fboptions.version}/oauth/access_token?grant_type=fb_exchange_token&client_id=${fboptions.appId}&client_secret=${fboptions.appSecret}&fb_exchange_token=${FB_ACCESS_TOKEN}`
  console.log('url', url);
  const token = await fetch(url).then(r => r.json()).catch(e => console.debug(e));
  // console.log('token', token);
  // access_token
  
  fboptions.accessToken = token.access_token;
  fbApp.setAccessToken(token.access_token);
  
  return token;
}

async function postEventFb (body) {
  const path = `/${fbPageID}/feed`;
  
  if (!fboptions.accessToken) await getAccessToken();
  
  fbApp.api(path, 'post', { message: body }, function (res) {
    if(!res || res.error) {
      console.log(!res ? 'error occurred' : res.error);
      return;
    }
    console.log('Post Id: ' + res.id);
  });
}

async function postEventTwitter (body) {
  body = body.slice(0, TW_MAX_CHAR);
  twclient.post('statuses/update', {status: body},  function(error, tweet, response) {
    if(error) {
      console.debug(error);
      return;
    }
      console.log('tweet tweeted');
  });
}

async function postMessage (msg_discord, msg_twitter) {
  webhook.send(msg_discord)
    .then(message => console.log(`Sent message on Discord.....`))
    .catch(console.error);
  postEventTwitter(msg_twitter)
    .then(message => console.log(`Sent message on Twitter.....`))
    .catch(console.error);
  
  postEventFb(msg_twitter)
    .then(message => console.log(`Sent message on Facebook.....`))
    .catch(console.error);
}

async function closeGitHubIssue (issueData) {
  if (issueData.state === 'closed') return;
  const request = `PATCH /repos/${volunteerRepo}/issues/${issueData.number}`;
  const data = {state: 'closed'};
  return authorizedGithubRequest(request, data).catch(e => console.error(e));
  
}

async function reopenGitHubIssue (issueData) {
  if (issueData.state !== 'closed') return;
  const request = `PATCH /repos/${volunteerRepo}/issues/${issueData.number}`;
  const data = {state: 'open'};
  return authorizedGithubRequest(request, data).catch(e => console.error(e));
}

async function assignGitHubIssue (issueData) {
  
}

async function init () {
  // const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');
  const provider = new ethers.providers.AlchemyProvider('rinkeby', alchemytoken);

  web3 = {provider};
  thelaurel = await getTheLaurel(web3, address);

  console.log('thelaurel ready', thelaurel.address);
}

function displayIssue (issue) {
  return `<${issue.html_url}> (${issue.title})`
}

function displayIssueTwitter (issue) {
  return `${issue.html_url} (${issue.title})`
}

function onTaskEvent (task) {
  const etherscanlink = `https://rinkeby.etherscan.io/tx/` + task.transactionHash;

  let  msg_discord = `**Task registered by ${task.organizerData} - ${displayLaurelAmount(task.task.amount)} ${task.laurel}**
Url: ${task.gitHubIssue ? displayIssue(task.gitHubIssue) : 'not found'}
Tx: <${etherscanlink}>
`
  const msg_twitter = `Task registered by ${task.organizerData} - ${displayLaurelAmount(task.task.amount)} ${task.laurel}
Tx: ${etherscanlink}
Url: ${task.gitHubIssue ? displayIssueTwitter(task.gitHubIssue) : 'not found'}
`
  const LINK_CLAIM = 'https://mark.provable.dev/?ipfs=QmQTMz8TR2vcCXfg1FJUu1QPu61neuzs98YW64L9ULv1hw&issue='
  msg_discord = task.gitHubIssue ? (msg_discord + `Claim Url: ${LINK_CLAIM}${task.gitHubIssue.number}`) : msg_discord
  console.log('-----onTaskEvent', msg_discord);
  return postMessage(msg_discord, msg_twitter);
}

function onVoteEvent (data) {
  const etherscanlink = `https://rinkeby.etherscan.io/tx/` + data.transactionHash;
  let amount, description;
  if (data.WL.toNumber() == 0) {
    amount = data.AL;
    description = 'Arbitration';
  } else {
    amount = data.WL;
    description = data.laurel;
  }
  amount = displayLaurelAmount(amount);
  
  console.log('winnerIndex', data.winnerIndex, data.revertedIndex);
  const {winnerIndex, revertedIndex} = data;
  const winnerText = `${(revertedIndex || revertedIndex === 0)  ? ('Reverted: option ' + revertedIndex + '\n') : ''}${(winnerIndex || winnerIndex === 0) ? ('WINNER: option ' + winnerIndex + '\n') : ''}`;
  
  const msg_discord = `**Vote by ${data.voterData} with ${amount} ${description} (weight ${data.weight}) for option ${data.optionIndex}**
${winnerText}Tx: <${etherscanlink}>
Task Url: ${data.gitHubIssue ? displayIssue(data.gitHubIssue) : 'not found'}
`
  
  const msg_twitter = `Vote by ${data.voterData} with ${amount} ${description} (weight ${data.weight}) for option ${data.optionIndex}
${winnerText}Tx: ${etherscanlink}
Task Url: ${data.gitHubIssue ? displayIssueTwitter(data.gitHubIssue) : 'not found'}
`
  
  console.log('-----onVoteEvent', msg_discord);
  
  if (data.winnerIndex) {
    // TODO
    // assignGitHubIssue(data.gitHubIssue, githubHandle);
    closeGitHubIssue(data.gitHubIssue);
  }
  
  return postMessage(msg_discord, msg_twitter);
}

function onClaimEvent (data) {
  const etherscanlink = `https://rinkeby.etherscan.io/tx/` + data.transactionHash;

  const msg_discord = `**Claim ${data.optionIndex} registered by ${data.beneficiaryData}** 
Proof Url: ${data.optionUrl ? ('<' + data.optionUrl + '>') : 'not found'}
Tx: <${etherscanlink}>
${data.gitHubIssue ? ("Task: " + displayIssue(data.gitHubIssue)) : 'not found'}
`
  const msg_twitter = `Claim ${data.optionIndex} registered by ${data.beneficiaryData}
Tx: ${etherscanlink}
Proof Url: ${data.optionUrl ? (data.optionUrl) : 'not found'}
${data.gitHubIssue ? ("Task: " + displayIssueTwitter(data.gitHubIssue)) : 'not found'}
`
  
  console.log('-----onClaimEvent', msg_discord);
  
  reopenGitHubIssue(data.gitHubIssue);
  
  return postMessage(msg_discord, msg_twitter);
}

client.fetchWebhook(whid, whtoken)
  .then(_webhook => {
    webhook = _webhook;
    console.log(`Obtained webhook with name: ${webhook.name}`)

    init().then(() => {
      monitor(web3, thelaurel, lastBlock, {
        onTaskRegistered: onTaskEvent,
        onClaim: onClaimEvent,
        onVote: onVoteEvent,
      }, 20000)
    });
  })
  .catch(e => console.error('errrr', e));


client.login(TOKEN)