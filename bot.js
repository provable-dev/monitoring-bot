const Discord = require("discord.js")
const {ethers} = require("ethers");
const client = new Discord.Client()
const {getTheLaurel, displayLaurelAmount} = require("./src/thelaurel");
const {monitor} = require('./src/watch');

let thelaurel = null;
let web3 = null;
let webhook = null;

const TOKEN = process.env.DISCORD_TOKEN;
const whtoken = process.env.DISCORD_WH_TOKEN;
const whid = process.env.DISCORD_WH_ID;
const alchemytoken = process.env.ALCHEMY_TOKEN;

const address = "0xD6866368Fcbe89bF10aCF948bc5Eb19b01e4dF82"
const lastBlock = null;// null  9006185; 8987838

async function init () {
  // const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');
  const provider = new ethers.providers.AlchemyProvider('rinkeby', alchemytoken);

  web3 = {provider};
  thelaurel = await getTheLaurel(web3, address);

  console.log('thelaurel ready', thelaurel.address);
}

function onTaskEvent (task) {
  const etherscanlink = `https://rinkeby.etherscan.io/tx/` + task.transactionHash;

  const msg = `**New task registered by ${task.organizerData}:**
${displayLaurelAmount(task.task.amount)} ${task.laurel}
Url: ${task.gitHubIssue ? task.gitHubIssue.html_url : 'not found'}
Tx: ${etherscanlink}
`
console.log('-----onTaskEvent', msg);
  webhook.send(msg)
    .then(message => console.log(`Sent message.....`))
    .catch(console.error);
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
  const msg = `**Vote by ${data.voterData} with ${amount} ${description} (weight ${data.weight}) for option ${data.optionIndex}**
${data.exWinnerData ? ('Reverted: ' + data.exWinnerData + '\n') : ''}${data.winnerData ? ('WINNER: ' + data.winnerData + '\n') : ''}Tx: ${etherscanlink}
Task Url: ${data.gitHubIssue ? data.gitHubIssue.html_url : 'not found'}
`
console.log('-----onVoteEvent', msg);
  webhook.send(msg)
    .then(message => console.log(`Sent message.....`))
    .catch(console.error);
}

function onClaimEvent (data) {
  const etherscanlink = `https://rinkeby.etherscan.io/tx/` + data.transactionHash;

  const msg = `**Claim ${data.optionIndex} registered by ${data.beneficiaryData}** 
Proof Url: ${data.optionUrl ? data.optionUrl : 'not found'}
Tx: ${etherscanlink}
${data.gitHubIssue ? ("Task: " + data.gitHubIssue.html_url) : 'not found'}
`
console.log('-----onClaimEvent', msg);
  webhook.send(msg)
    .then(message => console.log(`Sent message.....`))
    .catch(console.error);
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
      }, 10000)
    });
  })
  .catch(e => console.error('errrr', e));


console.log(TOKEN);
client.login(TOKEN)
