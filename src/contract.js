const address = "0xd0b3265554927469E7B4FE6E306FAE68A38DC8dA";

const abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "contentHash",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tag",
				"type": "uint256"
			}
		],
		"name": "Paid",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "arg1",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "arg2",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "arg3",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "arg4",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "arg5",
				"type": "uint256"
			}
		],
		"name": "Paid5",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "contentHash",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tag",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "originalContentHash",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "originalTag",
				"type": "uint256"
			}
		],
		"name": "PaidCounter",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "target",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "contentHash",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "tag",
				"type": "uint256"
			}
		],
		"name": "pay",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "target",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "arg1",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "arg2",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "arg3",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "arg4",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "arg5",
				"type": "uint256"
			}
		],
		"name": "pay5",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "target",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "contentHash",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "tag",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "originalContentHash",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "originalTag",
				"type": "uint256"
			}
		],
		"name": "payCounter",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdrawOwner",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "ratio",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "ratioCounter",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

module.exports = {address, abi}