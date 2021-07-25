const path = require("path");

const {address, abi} = require("./src/contract.js");
const ethers = require("ethers");
const BN = require("bn.js");
const CID = require("cids");
const axios = require("axios");

const _FB = require('fb');
var Twitter = require('twitter');

const ALCHEMY_TOKEN = process.env.ALCHEMY_TOKEN;
const FB_ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN;
let FB_ACCESS_TOKEN_LONG = process.env.FB_ACCESS_TOKEN_LONG;
const FB_APP_ID = process.env.FB_APP_ID;
const FB_APP_SECRET = process.env.FB_APP_SECRET;
const WHISTLE_SUBMISSION = "QmaPHioZKurHjvnp2nSPG4orURaY7LVgKNiZPNAomTN5fw";
const TIKKUN_APP = "https://tikkun.provable.dev";
const MAX_WAIT = 10*1000;

const TW_MAX_CHAR = 300;
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


const {FB, Facebook, FacebookApiException} = _FB;

const fboptions = {version: 'v10.0', accessToken: FB_ACCESS_TOKEN_LONG, appId: FB_APP_ID, appSecret: FB_APP_SECRET}
console.log('fboptions', fboptions);

const fbAppName = 'tikkun.olam.dapp';
const fbApp = new Facebook(fboptions);
// fbApp.setAccessToken(FB_ACCESS_TOKEN);
// fbApp.options(fboptions);
console.log('fbApp', fbApp)

const networkName = 'ropsten';

// curl -i -X GET "https://graph.facebook.com/{your-user-id}/accounts?access_token={user-access-token} 
// client token e57a3928eac463cbcbc527bd9116f705
// user id 103913641919449

async function getProvider () {
  let provider;
  provider = new ethers.providers.AlchemyProvider(networkName, ALCHEMY_TOKEN);
  return provider;
}

async function watchEvents (callback) {
  const provider = await getProvider();
  const instance = new ethers.Contract(address, abi, provider);
  
  // const events = await instance.queryFilter('Paid').catch(console.log);
  // console.log('events', events.length);
  instance.on('Paid', (...args) => {
    console.log('callback', args);
    try {
      callback(args);
    } catch(e) {
      console.debug(e);
    }
  });
  
  instance.on('PaidCounter', (...args) => {
    console.log('callback', args);
    try {
      callback(args, true);
    } catch(e) {
      console.debug(e);
    }
  });
}

function getEtherscanTxLink (transactionHash, networkName) {
  const name = !networkName ? '' : (networkName + '.');
  return `https://${name}etherscan.io/tx/${transactionHash}`;
}

async function postEvent (args, counter = false) {
  const event = args.pop();
  console.log('postEvent', event);
  // event.transactionHash
  // event.getTransactionReceipt();
  // networkName
  
  const etherscanlink = getEtherscanTxLink(event.transactionHash, networkName);
  console.log('etherscanlink', etherscanlink);
  
  const data = getInfoFromEvent(event);
  console.log('data', data);
  
  const linkdata = linkFromEventData(data);
  console.log('linkdata', linkdata);
  const link = await linkdata.link();
  console.log('link', link);
  
  let body = `${etherscanlink}
${link}

`;
  if (counter) body = body + `
Counter.`;
  
  console.log('body', body);
  
  postEventFb(body);
  postEventTwitter(body);
}

async function postEventFb (body) {
  const path = `/${fbAppName}/feed`;
  
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

async function getAccessToken() {
  const url = `https://graph.facebook.com/${fboptions.version}/oauth/access_token?grant_type=fb_exchange_token&client_id=${fboptions.appId}&client_secret=${fboptions.appSecret}&fb_exchange_token=${FB_ACCESS_TOKEN}`
  console.log('url', url);
  const data = await axios.get(url).catch(e => console.debug(e));
  const token = data.data;
  console.log('token', token);
  // access_token
  
  fboptions.accessToken = token.access_token;
  fbApp.setAccessToken(token.access_token);
  
  return token;
}

async function getPageToken() {
  const url = `https://graph.facebook.com/tikkun.olam.dapp?fields=access_token&access_token={user-access-token}`
}

// Require the fastify framework and instantiate it
const fastify = require("fastify")({
  // set this to true for detailed logging:
  logger: false
});

// Setup our static files
fastify.register(require("fastify-static"), {
  root: path.join(__dirname, "public"),
  prefix: "/" // optional: default '/'
});

// fastify-formbody lets us parse incoming forms
fastify.register(require("fastify-formbody"));

// point-of-view is a templating manager for fastify
fastify.register(require("point-of-view"), {
  engine: {
    handlebars: require("handlebars")
  }
});

// Our main GET home page route, pulls from src/pages/index.hbs
fastify.get("/", function(request, reply) {
  // params is an object we'll pass to our handlebars template
  let params = {
    greeting: "Hello Node!"
  };
  // request.query.paramName <-- a querystring example
  reply.view("/src/pages/index.hbs", params);
});

// A POST route to handle form submissions
fastify.post("/", function(request, reply) {
  let params = {
    greeting: "Hello Form!"
  };
  // request.body.paramName <-- a form post example
  reply.view("/src/pages/index.hbs", params);
});

// Run the server and report out to the logs
fastify.listen(process.env.PORT, async function(err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`Your app is listening on ${address}`);
  fastify.log.info(`server listening on ${address}`);
  
  if (!fboptions.accessToken) await getAccessToken();
  
  watchEvents(postEvent);
  // postEvent();
  // getAccessToken()
  // postEventFb("another test1")
});

function getInfoFromEvent (ev) {
    // console.log('getInfoFromEvent', ev);
    let {contentHash, tag, originalContentHash, originalTag} = ev.args;
    if (!contentHash) {
        [contentHash, tag] = ev.args;
    }
    if (!contentHash || !tag) return;
    if (typeof contentHash === 'object') {
        contentHash = contentHash._hex;
    }
    if (typeof tag === 'object') {
        tag = tag._hex;
    }
    if (originalContentHash && typeof originalContentHash === 'object') {
        originalContentHash = originalContentHash._hex;
    }
    if (originalTag && typeof originalTag === 'object') {
        originalTag = originalTag._hex;
    }
    contentHash = ethers.BigNumber.from(contentHash);
    tag = ethers.BigNumber.from(tag);
    const _tag = tag.toHexString().slice(2);
    const _contentHash = contentHash.toHexString().slice(2);
    const _jurisdiction = _tag.slice(0, 2);
    const _data = _tag.slice(2, 18);
    const _tags = _tag.slice(18, 22);
    const _lat = _tag.slice(22, 38);
    const _long = _tag.slice(38, 54);
    const prefix = _tag.slice(54, 58);
    const jurisdiction = hexToInt(_jurisdiction, 1);
    const datevalue = hexToInt(_data, 8);
    const tags = hexToInt(_tags, 2);
    const lat = hexToInt(_lat, 8) / Math.pow(10, 15);
    const long = hexToInt(_long, 8) / Math.pow(10, 15);
    const ipfsHash = prefix + _contentHash;

    return {
        jurisdiction,
        datevalue,
        tags: [tags],
        coordinates: [lat, long].join(','),
        ipfs: ipfsHash,
        dataTag: tag.toHexString(),
        contentHash: contentHash.toHexString(),
        originalContentHash,
        originalTag,
    }
}

function linkFromEventData (d) {
    // console.log('linkFromEventData', d.coordinates, d.datevalue);
    const getLink = async () => {
        const bin = hextou8(d.ipfs);
        let url = `${TIKKUN_APP}/?ipfs=${WHISTLE_SUBMISSION}&input=`;
        let ipfsHash;
        try {
          const cid = new CID(bin);
          ipfsHash = cid.toString();
        } catch (e) {
          console.debug(e);
        }
        console.log('ipfsHash', ipfsHash);
        const input = encodeURIComponent(JSON.stringify({submissionIpfsHash: ipfsHash}));
        url += input;
        url += '#new'; // go to submission directly
        console.log('url', url);
        return url;
    }
    const date = new Date(parseInt(d.datevalue)).toUTCString();
    console.log('linkFromEventData', d, Object.entries(d));
    return {
        coordinates: d.coordinates,
        label: date,
        info: Object.entries(d || {}).map(v => v.join(': ')).join('; '),
        link: getLink,
    }
}

function waitFor (operation, interval) {
  return new Promise(async (resolve, reject) => {
    let resolved = false;
    const timerId = setTimeout(() => {
      if (!resolved) {
        resolved = true;
        resolve();
      }
    }, interval);
    const result = await operation();
    if (!resolved) {
      clearTimeout(timerId);
      resolved = true;
      resolve(result);
    }
  });
}


async function ipfsGet(hash) {
  const operation = () => {
    return axios.get('https://ipfs.io/ipfs/' + hash);
  }
  const response = await waitFor(operation, MAX_WAIT);
  return response ? response.data : null;
}

function hexToInt (v, size) {
    const _v = v.slice(0, 2) === '0x' ? v.slice(2) : v;
    return new BN(_v, 16).fromTwos(8 * size).toString(10);
}

function hextou8 (value) {
    let arr = [];
    let _value = value.slice(0, 2) === '0x' ? value.slice(2) : value;
    _value = _value.length % 2 === 0 ? _value : ('0' + _value);
    const nibbles = _value.split('');
    nibbles.forEach((a, i) => {
        if (i % 2 === 0) arr.push(parseInt(nibbles[i] + nibbles[i + 1], 16));
    });
    return new Uint8Array(arr);
}