const Discord = require("discord.js")
const {ethers} = require("ethers");
const client = new Discord.Client()
const {getTheLaurel} = require("./src/thelaurel");
const {monitor} = require('./src/watch');

let thelaurel = null;
let web3 = null;
let webhook = null;

const TOKEN = process.env.DISCORD_TOKEN;
const whtoken = process.env.DISCORD_WH_TOKEN;
const whid = process.env.DISCORD_WH_ID;
const alchemytoken = process.env.ALCHEMY_TOKEN;

async function init () {
  const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');
  // const provider = new ethers.providers.AlchemyProvider('rinkeby', alchemytoken);

  web3 = {provider};
  thelaurel = await getTheLaurel(web3, "0x638A246F0Ec8883eF68280293FFE8Cfbabe61B44")

  console.log('thelaurel ready', thelaurel.address);
}

function onTaskEvent (task) {
  const etherscanlink = `https://rinkeby.etherscan.io/tx/` + task.transactionHash;

  const msg = `New task registered by ${task.organizerData}:
${task.task.amount} ${task.laurel}
Url: ${task.gitHubIssue ? task.gitHubIssue.html_url : 'not found'}
Tx: ${etherscanlink}
`
console.log('-----onTaskEvent', msg);
  webhook.send(msg)
    .then(message => console.log(`Sent message.....`))
    .catch(console.error);
}

client.fetchWebhook(whid, whtoken)
  .then(_webhook => {
    webhook = _webhook;
    console.log(`Obtained webhook with name: ${webhook.name}`)

    init().then(() => monitor(web3, thelaurel, onTaskEvent, 10000));
  })
  .catch(e => console.error('errrr', e));


console.log(TOKEN);
client.login(TOKEN)
