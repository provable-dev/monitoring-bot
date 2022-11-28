const compiled = {
    "_format": "hh-sol-artifact-1",
    "contractName": "TheLaurel",
    "sourceName": "contracts/TheLaurel.sol",
    "abi": [
      {
        "inputs": [
          {
            "internalType": "uint256[]",
            "name": "coeficientValues",
            "type": "uint256[]"
          },
          {
            "components": [
              {
                "internalType": "address",
                "name": "account",
                "type": "address"
              },
              {
                "internalType": "bytes32",
                "name": "laurelid",
                "type": "bytes32"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              }
            ],
            "internalType": "struct TheLaurel.LaurelInitialState[]",
            "name": "initialState",
            "type": "tuple[]"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "bytes32",
            "name": "source",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "internalType": "int256",
            "name": "amountSource",
            "type": "int256"
          },
          {
            "indexed": false,
            "internalType": "bytes32",
            "name": "target",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "internalType": "int256",
            "name": "amountTarget",
            "type": "int256"
          }
        ],
        "name": "Exchanged",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "volunteer",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "ancestor",
            "type": "address"
          }
        ],
        "name": "KickVolunteer",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "taskid",
            "type": "bytes32"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "typeOfEvent",
            "type": "uint256"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "winner",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "optionxId",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "optionyId",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "x",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "y",
            "type": "uint256"
          }
        ],
        "name": "Outcome",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "bytes32",
            "name": "laurelid",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "internalType": "int256",
            "name": "amount",
            "type": "int256"
          }
        ],
        "name": "Pumped",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "taskid",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "internalType": "bytes32",
            "name": "optionid",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "optionIndex",
            "type": "uint256"
          }
        ],
        "name": "RegisterOption",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "taskid",
            "type": "bytes32"
          }
        ],
        "name": "RegisterTask",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "ancestor",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "volunteer",
            "type": "address"
          }
        ],
        "name": "RegisterVolunteer",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "taskid",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "optionIndex",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "WL",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "AL",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "weight",
            "type": "uint256"
          }
        ],
        "name": "Voted",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "AL",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "LAST_BASE_COEF",
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
        "name": "LAUREL_INIT_MINT",
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
        "name": "LAUREL_VOLUNTEER_BOOTSTRAP",
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
        "name": "SYSTEM",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "name": "_balances",
        "outputs": [
          {
            "internalType": "int256",
            "name": "",
            "type": "int256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "alunit",
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
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "ancestors",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "taskid",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "optionIndex",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "arbitrate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "taskid",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "optionIndex",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "awardLaurels",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "name": "balances",
        "outputs": [
          {
            "internalType": "int256",
            "name": "",
            "type": "int256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "bootstrapLaurels",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "int256",
            "name": "amount",
            "type": "int256"
          }
        ],
        "name": "calculateAncestor",
        "outputs": [
          {
            "internalType": "int256",
            "name": "ancestorAmount",
            "type": "int256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "laurelid",
            "type": "bytes32"
          },
          {
            "internalType": "int256",
            "name": "amount",
            "type": "int256"
          }
        ],
        "name": "calculateTransform",
        "outputs": [
          {
            "internalType": "int256",
            "name": "newamount",
            "type": "int256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "ancestor",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "checkAncestorLine",
        "outputs": [],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amountAL",
            "type": "uint256"
          }
        ],
        "name": "checkArbiter",
        "outputs": [],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "laurelid",
            "type": "bytes32"
          }
        ],
        "name": "checkLaurelCreated",
        "outputs": [],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "internalType": "bytes32",
            "name": "laurelid",
            "type": "bytes32"
          }
        ],
        "name": "checkMinThresholdAction",
        "outputs": [],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "taskid",
            "type": "bytes32"
          }
        ],
        "name": "checkTaskActive",
        "outputs": [],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "checkVolunteer",
        "outputs": [],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "taskid",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "optionid",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "beneficiary",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_WL",
            "type": "uint256"
          }
        ],
        "name": "claimAndAwardLaurels",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "optionIndex",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "closeSetupPhase",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "coefDenom",
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
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "coefs",
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
        "name": "decimals",
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
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "laurelidSource",
            "type": "bytes32"
          },
          {
            "internalType": "int256",
            "name": "amount",
            "type": "int256"
          },
          {
            "internalType": "bytes32",
            "name": "laurelidTarget",
            "type": "bytes32"
          }
        ],
        "name": "exchangeAmount",
        "outputs": [
          {
            "internalType": "int256",
            "name": "newamount",
            "type": "int256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "laurelidSource",
            "type": "bytes32"
          },
          {
            "internalType": "int256",
            "name": "amount",
            "type": "int256"
          },
          {
            "internalType": "bytes32",
            "name": "laurelidTarget",
            "type": "bytes32"
          }
        ],
        "name": "exchangeLaurels",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "internalType": "bytes32",
            "name": "laurelid",
            "type": "bytes32"
          }
        ],
        "name": "getBalance",
        "outputs": [
          {
            "internalType": "int256",
            "name": "amount",
            "type": "int256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "getBalanceUncolored",
        "outputs": [
          {
            "internalType": "int256",
            "name": "amount",
            "type": "int256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "enum TheLaurel.Coefs",
            "name": "value",
            "type": "uint8"
          }
        ],
        "name": "getCoef",
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
        "inputs": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          }
        ],
        "name": "getLaurelIdFromName",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "id",
            "type": "bytes32"
          }
        ],
        "stateMutability": "pure",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "laurelid",
            "type": "bytes32"
          }
        ],
        "name": "getLaurelUnit",
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
        "inputs": [
          {
            "internalType": "uint256[]",
            "name": "arr",
            "type": "uint256[]"
          }
        ],
        "name": "getMaxFromArray",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
          }
        ],
        "stateMutability": "pure",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256[]",
            "name": "arr",
            "type": "uint256[]"
          },
          {
            "internalType": "uint256",
            "name": "pos",
            "type": "uint256"
          }
        ],
        "name": "getMaxFromArrayExcept",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
          }
        ],
        "stateMutability": "pure",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "internalType": "bytes32",
            "name": "laurelid",
            "type": "bytes32"
          }
        ],
        "name": "getPrimordialBalance",
        "outputs": [
          {
            "internalType": "int256",
            "name": "amount",
            "type": "int256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "x",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "y",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address",
                "name": "organizer",
                "type": "address"
              },
              {
                "internalType": "bytes32",
                "name": "laurelid",
                "type": "bytes32"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "x",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "y",
                "type": "uint256"
              }
            ],
            "internalType": "struct TheLaurel.vTask",
            "name": "r",
            "type": "tuple"
          }
        ],
        "name": "getStatus",
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
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "laurelid",
            "type": "bytes32"
          }
        ],
        "name": "getSupply",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "supply",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "taskid",
            "type": "bytes32"
          }
        ],
        "name": "getTask",
        "outputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "organizer",
                "type": "address"
              },
              {
                "internalType": "bytes32",
                "name": "laurelid",
                "type": "bytes32"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "x",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "y",
                "type": "uint256"
              }
            ],
            "internalType": "struct TheLaurel.vTask",
            "name": "task",
            "type": "tuple"
          },
          {
            "internalType": "bytes32[]",
            "name": "optionIds",
            "type": "bytes32[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "taskid",
            "type": "bytes32"
          }
        ],
        "name": "getTotalAL",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "totalAL",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "taskid",
            "type": "bytes32"
          }
        ],
        "name": "getTotalWeight",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "weight",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "taskid",
            "type": "bytes32"
          }
        ],
        "name": "getVoteALs",
        "outputs": [
          {
            "internalType": "uint256[]",
            "name": "ALs",
            "type": "uint256[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "taskid",
            "type": "bytes32"
          }
        ],
        "name": "getVoteStatus",
        "outputs": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "status",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "xi",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "yi",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "x",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "y",
                "type": "uint256"
              }
            ],
            "internalType": "struct TheLaurel.VoteStatus",
            "name": "voteStatus",
            "type": "tuple"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "taskid",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "optionIndex",
            "type": "uint256"
          }
        ],
        "name": "getVoteWeight",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "weight",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "taskid",
            "type": "bytes32"
          }
        ],
        "name": "getVoteWeights",
        "outputs": [
          {
            "internalType": "uint256[]",
            "name": "weights",
            "type": "uint256[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "taskid",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "optionIndex",
            "type": "uint256"
          }
        ],
        "name": "getVotingOption",
        "outputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "beneficiary",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "WL",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "AL",
                "type": "uint256"
              }
            ],
            "internalType": "struct TheLaurel.VotingOption",
            "name": "voption",
            "type": "tuple"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "prevWinner",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "prevStatus",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "status",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "xi",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "yi",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "x",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "y",
                "type": "uint256"
              }
            ],
            "internalType": "struct TheLaurel.VoteStatus",
            "name": "nextStatus",
            "type": "tuple"
          }
        ],
        "name": "getWinner",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "winner",
            "type": "uint256"
          }
        ],
        "stateMutability": "pure",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "taskid",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "getWinnerCappedAmount",
        "outputs": [
          {
            "internalType": "int256",
            "name": "_amount",
            "type": "int256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "taskid",
            "type": "bytes32"
          }
        ],
        "name": "getWinnerMaxAmount",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "ancestor",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "isAncestor",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "isSetup",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "isSetupPhase",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "volunteerAccount",
            "type": "address"
          }
        ],
        "name": "kickVolunteer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "kicks",
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
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "laurelid",
            "type": "bytes32"
          }
        ],
        "name": "laurelCreated",
        "outputs": [
          {
            "internalType": "bool",
            "name": "created",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "laurelsArray",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "name": "lockedTasks",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "name": "optionIndexes",
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
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "options",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "key",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "proposeCoef",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "coef",
                "type": "uint256"
              }
            ],
            "internalType": "struct TheLaurel.LaurelInfo",
            "name": "laurelinfo",
            "type": "tuple"
          }
        ],
        "name": "proposeLaurel",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "laurelid",
            "type": "bytes32"
          }
        ],
        "name": "pump",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "taskid",
            "type": "bytes32"
          },
          {
            "components": [
              {
                "internalType": "address",
                "name": "organizer",
                "type": "address"
              },
              {
                "internalType": "bytes32",
                "name": "laurelid",
                "type": "bytes32"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "x",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "y",
                "type": "uint256"
              }
            ],
            "internalType": "struct TheLaurel.vTask",
            "name": "task",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "investArbitration",
            "type": "bool"
          }
        ],
        "name": "registerTask",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "volunteerAccount",
            "type": "address"
          }
        ],
        "name": "registerVolunteer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32[]",
            "name": "_bootstrapLaurels",
            "type": "bytes32[]"
          }
        ],
        "name": "setBootstrapLaurels",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "coef",
                "type": "uint256"
              }
            ],
            "internalType": "struct TheLaurel.LaurelInfo[]",
            "name": "laurels",
            "type": "tuple[]"
          }
        ],
        "name": "setLaurels",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "name": "tasks",
        "outputs": [
          {
            "internalType": "address",
            "name": "organizer",
            "type": "address"
          },
          {
            "internalType": "bytes32",
            "name": "laurelid",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "x",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "y",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "name": "totalSupplies",
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
        "name": "totalSupply",
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
        "name": "unit",
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
        "name": "version",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "voters",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "votersAL",
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
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "votingOptions",
        "outputs": [
          {
            "internalType": "address",
            "name": "beneficiary",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "WL",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "AL",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "taskid",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "_WL",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_AL",
            "type": "uint256"
          }
        ],
        "name": "weightFromLaurels",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "weight",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "name": "winnerToggleCount",
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
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "name": "winners",
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
    ],
    "bytecode": "0x60c060405260056080819052640302e322e360dc1b60a090815262000028916000919062001ebe565b507fa7e8030f20d51298078da9ed202f23280c7cf8b6b49a999a7e9457f8f1938587600455600360058190556200006190600a62002235565b6200006e906001620022f1565b600681905562000080906001620022f1565b6007556103e86008556006546200009990603c620022f1565b600955600654620000ac90603c620022f1565b600a908155600b805460ff19166001179055600e55348015620000ce57600080fd5b506040516200682e3803806200682e833981016040819052620000f1916200201d565b600e54825111620001495760405162461bcd60e51b815260206004820152601360248201527f436f6566696369656e7473206d697373696e670000000000000000000000000060448201526064015b60405180910390fd5b60018054336001600160a01b031991821681179092556002805430921682179055620001769082620002c3565b6000600654600a620001899190620022f1565b84600881518110620001ab57634e487b7160e01b600052603260045260246000fd5b60200260200101518551620001c19190620022f1565b620001ce906002620022f1565b620001da9190620021b0565b9050620001f160045482846200038760201b60201c565b60005b845181101562000250578481815181106200021f57634e487b7160e01b600052603260045260246000fd5b6020908102919091018101516000838152601d909252604090912055806200024781620023a9565b915050620001f4565b5060005b8451811015620002ad5762000298818683815181106200028457634e487b7160e01b600052603260045260246000fd5b6020026020010151620003da60201b60201c565b80620002a481620023a9565b91505062000254565b50620002b98362000597565b50505050620023f3565b6001600160a01b038181166000908152601b60205260409020541615620003225760405162461bcd60e51b8152602060048201526012602482015271105b1c9958591e481c9959da5cdd195c995960721b604482015260640162000140565b6001600160a01b038181166000818152601b602090815260409182902080546001600160a01b031916948716948517905590519182527f5d5df5e56200e3e6f92ac0067b9efa454a00ce9fc7109394e4a8722bd0470103910160405180910390a25050565b60008381526018602052604081208054849290620003a7908490620021b0565b925050819055508160036000828254620003c29190620021b0565b90915550620003d5905083838362000654565b505050565b6000828152600f60205260409020543390839083906001600160a01b0316620004625762000462826040518060a00160405280866001600160a01b0316815260200160045481526020016200043660086200069360201b60201c565b815260200162000447600962000693565b815260200162000458600a62000693565b90526000620006d0565b60008281526011602090815260408083205481516001600160a01b0388168185015280830187905260608082018390528351808303909101815260809091018352805190840120808552601e909352922054158015620004d157506000818152601e6020526040902060010154155b6200051f5760405162461bcd60e51b815260206004820152601560248201527f50726f706f73616c20616c7265616479206d6164650000000000000000000000604482015260640162000140565b60408051808201825288815260208082018981526000858152601e8352848120935184559051600190930192909255868252600f9052908120600201546200056d908690869089906200096f565b90508083146200058d57634e487b7160e01b600052600160045260246000fd5b5050505050505050565b60005b815181101562000650576200063b828281518110620005c957634e487b7160e01b600052603260045260246000fd5b602002602001015160200151838381518110620005f657634e487b7160e01b600052603260045260246000fd5b6020026020010151604001518484815181106200062357634e487b7160e01b600052603260045260246000fd5b6020026020010151600001516200038760201b60201c565b806200064781620023a9565b9150506200059a565b5050565b6001600160a01b0381166000908152601960209081526040808320868452909152812080548492906200068990849062002169565b9091555050505050565b6000601d600083600a811115620006ba57634e487b7160e01b600052602160045260246000fd5b8152602001908152602001600020549050919050565b336000620006de8262000b1d565b6020840151620006ee9062000b96565b6000858152600f60205260409020546001600160a01b031615620007555760405162461bcd60e51b815260206004820152601760248201527f5461736b20616c72656164792072656769737465726564000000000000000000604482015260640162000140565b8215620007eb57506007546004546200077090828462000bef565b6000858152601760209081526040808320600380855290835281842080546001810182559085528385200180546001600160a01b0319166001600160a01b038816179055600754898552601684528285209185529083528184208480529092528220805491929091620007e5908490620021b0565b90915550505b62000806846020015185604001518462000bef60201b60201c565b6200081c82856020015162000c2460201b60201c565b6040805160a0810182526001600160a01b03848116825260208781015181840190815288850180518587019081526060808c01519087019081526080808d015190880190815260008e8152600f8752898120985189549089166001600160a01b0319918216178a5595516001808b019190915593516002808b019190915592516003808b019190915591516004909901989098558154601387528989208980528752898920805487169189169190911790558154838952898920805487169189169190911790558154918852888820805490951691909616179092558a8552601183529484208054808301825581865292852092830185905580548083018255830185905580549182019055019190915590516200093d9187918462000c8d565b60405185907fc7790ed2b3070179fd31a37f4ee1b2b9bd803aebb3fc047c7790ac47f63a553290600090a25050505050565b6000336200097d8162000b1d565b620009888462000b1d565b620009938662000dd3565b600086815260126020908152604080832088845290915290205415620009ec5760405162461bcd60e51b815260206004820152600d60248201526c4f7074696f6e2065786973747360981b604482015260640162000140565b60008681526011602090815260408220805460018082018355918452919092208101879055925062000a20908390620021b0565b6000878152601260209081526040808320898452825280832093909355888252600f9052206002015483101562000a9a5760405162461bcd60e51b815260206004820152601c60248201527f436c61696d20616d6f756e74206d757374206265206772656174657200000000604482015260640162000140565b6000868152601360209081526040808320858452909152902080546001600160a01b0319166001600160a01b03861617905562000ad986838562000e27565b604080518681526020810184905287917fe339c372a63d3e4cdad9a9169af886e4c7527413fc2f7769736c5320f3255d72910160405180910390a250949350505050565b6001600160a01b038181166000908152601b60205260409020541615158062000b5357506002546001600160a01b038281169116145b62000b935760405162461bcd60e51b815260206004820152600f60248201526e2737ba1030903b37b63ab73a32b2b960891b604482015260640162000140565b50565b62000ba18162000edf565b62000b935760405162461bcd60e51b815260206004820152601560248201527f4c617572656c206e6f7420726567697374657265640000000000000000000000604482015260640162000140565b6001600160a01b0381166000908152601960209081526040808320868452909152812080548492906200068990849062002313565b6001600160a01b03821660009081526019602090815260408083208484529091528120541215620006505760405162461bcd60e51b81526020600482015260126024820152714e6f7420656e6f7567682062616c616e636560701b604482015260640162000140565b600084815260136020908152604080832086845290915281206001810180549192859262000cbd908490620021b0565b925050819055508181600201600082825462000cda9190620021b0565b909155508590507f5cd95b2479bafc9329fca4929294f537f41652f18ab66a54865114597bd05b9b85858562000d1285838362000f03565b60408051948552602085019390935291830152606082015260800160405180910390a262000d408562000f88565b6000868152600f602052604090206002015462000d5d9062000fd8565b111562000d6b575062000dcd565b6000858152601460205260408120549062000d868762000ff5565b9050600062000d958862000ff5565b825190915062000da89084908362001183565b600089815260146020526040902081905582516200058d918a91869190858c620011bc565b50505050565b60008181526010602052604090205460ff1615156001141562000b935760405162461bcd60e51b815260206004820152600b60248201526a15185cdac81b1bd8dad95960aa1b604482015260640162000140565b62000e323362000b1d565b62000e3d8362000dd3565b33600383101562000e555762000dcd84848462001766565b6000848152600f6020908152604091829020825160a08101845281546001600160a01b0316815260018201549281018390526002820154938101939093526003810154606084015260040154608083015262000eb390848462000bef565b62000ec982826020015162000c2460201b60201c565b62000ed8858585600062000c8d565b5050505050565b6000818152601d602052604081205481108062000efd575060045482145b92915050565b600080600554600a62000f17919062002235565b7f9de6abd965d55c3bb0cdbf6fa175050624c6ff8fe86f682dc08f2a450ede2278546000878152600f602052604090206002015462000f579190620022f1565b62000f639190620021cb565b905062000f718184620022f1565b62000f7d9085620021b0565b9150505b9392505050565b600081815260116020526040812054815b8181101562000fd15762000fae848262001811565b62000fba9084620021b0565b92508062000fc881620023a9565b91505062000f99565b5050919050565b6000600162000fe9836002620022f1565b62000efd919062002358565b620010286040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b600062001035836200186d565b905080516000141562001076576040518060a00160405280600081526020016000815260200160008152602001600081526020016000815250915050919050565b6000620010838262001934565b90506000620010938383620019ba565b90506000838381518110620010b857634e487b7160e01b600052603260045260246000fd5b602002602001015190506000848381518110620010e557634e487b7160e01b600052603260045260246000fd5b6020908102919091018101516000898152600f83526040808220815160a08101835281546001600160a01b03168152600182015495810195909552600281015491850191909152600381015460608501526004015460808401529092509062001152908490849062001a4e565b6040805160a08101825291825260208201969096529485019390935260608401919091526080830152509392505050565b8051600090600114156200119d5750602081015162000f81565b815160021415620011b45750604081015162000f81565b509192915050565b600086815260136020908152604080832087845290915281206002015460011062001213576006600052601d6020527fe05f340630215c2ef0683a72fde801183a1a4ecac14ded57e11c794e9bcb20695462001240565b6007600052601d6020527f0b2bb571a71764032d04342d0eb422bc5d6eeb3c436078b13e30f0762c04c504545b600088815260156020526040902054909150811162001325576000878152601060209081526040808320805460ff1916600190811790915560148352818420849055601383528184208a8552835292819020815160608101835281546001600160a01b03168152938101549284018390526002015490830152620012c690899062001b71565b81516001600160a01b03166000908152601a602090815260408083208c8452600f8352818420600101548452909152812080549091906200130990849062002313565b909155506200131d90508888600162001b90565b50506200175e565b848614620015e65785156200143857856000886000805160206200680e833981519152866020015187604001518860600151896080015160405162001383949392919093845260208401929092526040830152606082015260800190565b60405180910390a46000878152601360209081526040808320898452825291829020825160608101845281546001600160a01b03168152600182015492810183905260029091015492810192909252620013df90899062001b71565b81516001600160a01b03166000908152601a602090815260408083208c8452600f8352818420600101548452909152812080549091906200142290849062002313565b909155506200143690508888600162001b90565b505b846001886000805160206200680e833981519152866020015187604001518860600151896080015160405162001487949392919093845260208401929092526040830152606082015260800190565b60405180910390a46000878152601360209081526040808320888452825291829020825160608101845281546001600160a01b03168152600182015492810183905260029091015492810192909252620014e390899062001b71565b81516001600160a01b03166000908152601a602090815260408083208c8452600f8352818420600101548452909152812080549091906200152690849062002169565b909155506200153a90508887600062001b90565b60008881526015602052604081208054600192906200155b908490620021b0565b90915550508051604080516001600160a01b03909216602083015281018990526060810184905260009060800160408051601f1981840301815291815281516020928301206000818152601e909352912054909150151580620015ce57506000818152601e602052604090206001015415155b15620015e3578151620015e390829062001d90565b50505b8486148015620015f557508185145b15620016be576000878152601360209081526040808320888452825291829020825160608101845281546001600160a01b031681526001820154928101839052600290910154928101929092526200164f90899062001b71565b81516001600160a01b03166000908152601a602090815260408083208c8452600f835281842060010154845290915290819020919091558101516200169690899062001b71565b90516001600160a01b03166000908152601a6020908152604080832060045484529091529020555b8251841415620016cf57506200175e565b836003148015620016e35750826020015185145b80620016fe5750836004148015620016fe5750826040015185145b156200175c57846002886000805160206200680e833981519152866020015187604001518860600151896080015160405162001753949392919093845260208401929092526040830152606082015260800190565b60405180910390a45b505b505050505050565b33620017728162000b1d565b6200177d8462000dd3565b6004546200178d90838362000bef565b600084815260176020908152604080832086845282528083208054600181018255908452828420810180546001600160a01b0319166001600160a01b0387161790558784526016835281842087855283528184208185529092528220805491928592620017fc908490620021b0565b9091555062000ed89050858560008662000c8d565b60008281526013602090815260408083208484528252808320815160608101835281546001600160a01b03168152600182015493810184905260029091015491810182905291620018659186919062000f03565b949350505050565b600081815260116020526040812054606091816001600160401b03811115620018a657634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015620018d0578160200160208202803683370190505b50905060005b828110156200192c57620018eb858262001811565b8282815181106200190c57634e487b7160e01b600052603260045260246000fd5b6020908102919091010152806200192381620023a9565b915050620018d6565b509392505050565b6000805b8251811015620019b4578282815181106200196357634e487b7160e01b600052603260045260246000fd5b60200260200101518382815181106200198c57634e487b7160e01b600052603260045260246000fd5b602002602001015111156200199f578091505b80620019ab81620023a9565b91505062001938565b50919050565b6000805b835181101562001a4757838281518110620019e957634e487b7160e01b600052603260045260246000fd5b602002602001015184828151811062001a1257634e487b7160e01b600052603260045260246000fd5b602002602001015111801562001a285750808314155b1562001a32578091505b8062001a3e81620023a9565b915050620019be565b5092915050565b60008315801562001a5d575082155b1562001a6c5750600062000f81565b8262001a7b5750600162000f81565b8362001a8a5750600262000f81565b6000808052601d6020527f0a51588b1664495f089dd83d2d26f247920f94a57a4a09f20cf068efc8f82bd4546080840151606085015191929162001ad0908490620022f1565b62001adc9190620021cb565b9050808562001aec8489620022f1565b62001af89190620021cb565b1062001b0a5760019250505062000f81565b808662001b188488620022f1565b62001b249190620021cb565b1062001b365760029250505062000f81565b81808662001b45828a620022f1565b62001b519190620021cb565b1062001b64576003935050505062000f81565b5060049695505050505050565b60008062001b7f8462001e23565b905080831162000f81578262001865565b600062001b9d8462001e64565b6000858152601360209081526040808320878452825291829020825160608101845281546001600160a01b031681526001820154928101929092526002015491810182905291925062001bf1908362002358565b6000868152601760209081526040808320888452825280832089845260168352818420898552909252822092945091905b82548110156200058d57604080850151600083815260208590529182205462001c4d908890620022f1565b62001c599190620021cb565b9050861562001cf15760008281526020849052604090205462001c7d9082620021b0565b601a600086858154811062001ca257634e487b7160e01b600052603260045260246000fd5b60009182526020808320909101546001600160a01b03168352828101939093526040918201812060045482529092528120805490919062001ce590849062002313565b9091555062001d7a9050565b60008281526020849052604090205462001d0c9082620021b0565b601a600086858154811062001d3157634e487b7160e01b600052603260045260246000fd5b60009182526020808320909101546001600160a01b03168352828101939093526040918201812060045482529092528120805490919062001d7490849062002169565b90915550505b508062001d8781620023a9565b91505062001c22565b6000828152601e602052604090208054600190910154600e5482111562001e0f576000828152601d6020526040902054829062001e0d57600d80546001810182556000919091527fd7b6990105719101dabeb77144f2a3385c8033acd3af97e9423a695e81ad1eb50181905560095462001e0d9082908662000387565b505b6000918252601d6020526040909120555050565b7fd19a5fe801b7c1f3d54e7cd62d56e46f02f2ab5a22ee5edcfdddda6c80cf4c11546000828152600f6020526040812060020154909162000efd91620022f1565b600081815260116020526040812054815b8181101562000fd157600084815260136020908152604080832084845290915290206002015462001ea79084620021b0565b92508062001eb581620023a9565b91505062001e75565b82805462001ecc9062002372565b90600052602060002090601f01602090048101928262001ef0576000855562001f3b565b82601f1062001f0b57805160ff191683800117855562001f3b565b8280016001018555821562001f3b579182015b8281111562001f3b57825182559160200191906001019062001f1e565b5062001f4992915062001f4d565b5090565b5b8082111562001f49576000815560010162001f4e565b600082601f83011262001f75578081fd5b8151602062001f8e62001f888362002143565b62002110565b8281528181019085830160608086028801850189101562001fad578687fd5b865b868110156200200f5781838b03121562001fc7578788fd5b62001fd1620020e5565b83516001600160a01b038116811462001fe857898afd5b81528387015187820152604080850151908201528552938501939181019160010162001faf565b509198975050505050505050565b6000806040838503121562002030578182fd5b82516001600160401b038082111562002047578384fd5b818501915085601f8301126200205b578384fd5b815160206200206e62001f888362002143565b8083825282820191508286018a848660051b89010111156200208e578889fd5b8896505b84871015620020b257805183526001969096019591830191830162002092565b5091880151919650909350505080821115620020cc578283fd5b50620020db8582860162001f64565b9150509250929050565b604051606081016001600160401b03811182821017156200210a576200210a620023dd565b60405290565b604051601f8201601f191681016001600160401b03811182821017156200213b576200213b620023dd565b604052919050565b60006001600160401b038211156200215f576200215f620023dd565b5060051b60200190565b600080821280156001600160ff1b03849003851316156200218e576200218e620023c7565b600160ff1b8390038412811615620021aa57620021aa620023c7565b50500190565b60008219821115620021c657620021c6620023c7565b500190565b600082620021e757634e487b7160e01b81526012600452602481fd5b500490565b600181815b808511156200222d578160001904821115620022115762002211620023c7565b808516156200221f57918102915b93841c9390800290620021f1565b509250929050565b600062000f8183836000826200224e5750600162000efd565b816200225d5750600062000efd565b81600181146200227657600281146200228157620022a1565b600191505062000efd565b60ff841115620022955762002295620023c7565b50506001821b62000efd565b5060208310610133831016604e8410600b8410161715620022c6575081810a62000efd565b620022d28383620021ec565b8060001904821115620022e957620022e9620023c7565b029392505050565b60008160001904831182151516156200230e576200230e620023c7565b500290565b60008083128015600160ff1b850184121615620023345762002334620023c7565b6001600160ff1b0384018313811615620023525762002352620023c7565b50500390565b6000828210156200236d576200236d620023c7565b500390565b600181811c908216806200238757607f821691505b60208210811415620019b457634e487b7160e01b600052602260045260246000fd5b6000600019821415620023c057620023c0620023c7565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b61440b80620024036000396000f3fe608060405234801561001057600080fd5b50600436106105145760003560e01c80637731a2b8116102a1578063b905b2791161016b578063d79ff1f2116100e3578063eb60b00811610097578063f18d45291161007c578063f18d452914610cbc578063f264117e14610ccf578063ff35db1914610cd757600080fd5b8063eb60b00814610caa578063ee46b52d14610cb357600080fd5b8063d8b3c2a4116100c8578063d8b3c2a414610be8578063e579f50014610c11578063e8397ace14610c8a57600080fd5b8063d79ff1f214610bc2578063d7b63b1f14610bd557600080fd5b8063c4ea5c771161013a578063cdf6e85e1161011f578063cdf6e85e14610b89578063ceac82f514610b9c578063d12632b614610baf57600080fd5b8063c4ea5c7714610b40578063c79d5ec514610b5357600080fd5b8063b905b27914610af4578063bdf6d80e14610b07578063be9b080814610b1a578063c21a50e714610b2d57600080fd5b8063810b05e911610219578063a8e926a4116101cd578063af4a05f0116101b2578063af4a05f014610a9d578063b0f75a1614610ace578063b5a5eb8614610ae157600080fd5b8063a8e926a414610a6a578063a96842d714610a7d57600080fd5b80639a428df9116101fe5780639a428df914610a2e5780639f89073f14610a4e578063a2ed1f7314610a5757600080fd5b8063810b05e914610a12578063907af6c014610a2557600080fd5b80637ac3177a116102705780637c3dbceb116102555780637c3dbceb146109cc5780637e964d89146109df57806380e10204146109ff57600080fd5b80637ac3177a146109b05780637b80fc8f146109c357600080fd5b80637731a2b81461096557806378600a4f1461097857806378900a581461098357806379ca5eeb146109a357600080fd5b80634277f4fd116103e257806361338ada1161035a5780636b9f64af1161030e578063709b0bfd116102f3578063709b0bfd1461092c57806374fe85761461093f57806375e852951461095257600080fd5b80636b9f64af14610906578063705a27181461091957600080fd5b806369eb12f21161033f57806369eb12f2146108b55780636b08c0b3146108e05780636b8630e9146108f357600080fd5b806361338ada1461088f57806368c16144146108a257600080fd5b806351351d53116103b15780635474dac0116103965780635474dac01461081c57806354d9be591461085a57806354fd4d501461087a57600080fd5b806351351d53146107c657806353b53172146107f157600080fd5b80634277f4fd146107175780634bb9f7cd146107375780634c6fcaad146107a05780634d430bf9146107b357600080fd5b8063196022e611610490578063309a788f1161044457806333aca55b1161042957806333aca55b146106d15780633531f2fc146106e457806335d11e841461070457600080fd5b8063309a788f146106b5578063313ce567146106c857600080fd5b806320f944271161047557806320f944271461067c5780632563e9a31461068f5780632ee423d4146106a257600080fd5b8063196022e6146106485780631f14df691461065157600080fd5b806312ea347b116104e75780631616bbf2116104cc5780631616bbf21461060057806317c416551461063657806318160ddd1461063f57600080fd5b806312ea347b146105cc57806315a29035146105df57600080fd5b806305a7304b1461051957806308b574e414610541578063095ac404146105625780630cfe734d14610577575b600080fd5b61052c610527366004613ad8565b610cfa565b60405190151581526020015b60405180910390f35b61055461054f366004613ced565b610d76565b604051908152602001610538565b610575610570366004613abe565b610dcb565b005b61058a610585366004613ced565b610e7f565b6040516105389190600060a082019050825182526020830151602083015260408301516040830152606083015160608301526080830151608083015292915050565b6105546105da366004613dd1565b611001565b6105f26105ed366004613ced565b61103d565b604051610538929190613f92565b61055461060e366004613b0a565b6001600160a01b03919091166000908152601a60209081526040808320938352929052205490565b610554600a5481565b61055460035481565b61055460085481565b61055461065f366004613b0a565b601960209081526000928352604080842090915290825290205481565b61055461068a366004613d05565b61110b565b61055461069d366004613ced565b61113c565b6105546106b0366004613e56565b61117b565b6105546106c3366004613d05565b6111b2565b61055460055481565b6105546106df366004613eca565b61120c565b6105546106f2366004613ced565b60186020526000908152604090205481565b610554610712366004613d62565b611312565b610554610725366004613ced565b60146020526000908152604090205481565b61077b610745366004613d05565b60136020908152600092835260408084209091529082529020805460018201546002909201546001600160a01b03909116919083565b604080516001600160a01b039094168452602084019290925290820152606001610538565b6105546107ae366004613d05565b611442565b6105756107c1366004613d8d565b61145d565b6002546107d9906001600160a01b031681565b6040516001600160a01b039091168152602001610538565b6105546107ff366004613d05565b601260209081526000928352604080842090915290825290205481565b61082f61082a366004613d05565b6116de565b6040805182516001600160a01b03168152602080840151908201529181015190820152606001610538565b610554610868366004613ced565b60009081526018602052604090205490565b610882611753565b6040516105389190613f5f565b61055461089d366004613df0565b6117e1565b6105756108b0366004613ced565b611811565b6105546108c3366004613b0a565b601a60209081526000928352604080842090915290825290205481565b6105756108ee366004613e23565b611989565b610554610901366004613ced565b611a50565b610554610914366004613ced565b611a71565b610575610927366004613ad8565b611ab9565b61057561093a366004613d62565b611b13565b61057561094d366004613d05565b611d00565b610575610960366004613ced565b611ea8565b6107d9610973366004613d62565b611f0f565b600b5460ff1661052c565b610554610991366004613ced565b6000908152601d602052604090205490565b600b5461052c9060ff1681565b6105546109be366004613abe565b611f54565b61055460075481565b6105756109da366004613d62565b611ffc565b6105546109ed366004613abe565b601c6020526000908152604090205481565b610575610a0d366004613ced565b6120a3565b610554610a20366004613ced565b6120f8565b61055460065481565b610a41610a3c366004613ced565b61214c565b6040516105389190613f1b565b61055460095481565b610554610a65366004613d05565b61220b565b610575610a78366004613abe565b612288565b610554610a8b366004613ced565b601d6020526000908152604090205481565b610554610aab366004613d62565b601660209081526000938452604080852082529284528284209052825290205481565b610554610adc366004613c77565b6123a8565b610575610aef366004613d62565b612421565b610575610b02366004613b33565b6124c5565b610554610b15366004613d62565b612573565b610575610b28366004613b0a565b6125ec565b610554610b3b366004613ced565b612661565b610575610b4e366004613b0a565b612671565b610554610b61366004613b0a565b6001600160a01b03919091166000908152601960209081526040808320938352929052205490565b61052c610b97366004613ced565b6126e3565b610554610baa366004613caa565b612702565b610a41610bbd366004613ced565b61278e565b610554610bd0366004613d26565b61285a565b610575610be3366004613abe565b612a0a565b6107d9610bf6366004613abe565b601b602052600090815260409020546001600160a01b031681565b610c58610c1f366004613ced565b600f60205260009081526040902080546001820154600283015460038401546004909401546001600160a01b0390931693919290919085565b604080516001600160a01b0390961686526020860194909452928401919091526060830152608082015260a001610538565b610554610c98366004613ced565b60156020526000908152604090205481565b610554600e5481565b61055460045481565b610575610cca366004613bc6565b612a8b565b610575612c54565b61052c610ce5366004613ced565b60106020526000908152604090205460ff1681565b6000815b6001600160a01b038082166000908152601b60205260409020548116908516811415610d2f57600192505050610d70565b6002546001600160a01b0382811691161415610d5057600092505050610d70565b6001600160a01b038116610d6957600092505050610d70565b9050610cfe565b92915050565b600080821215610d8857506000919050565b6008546002600052601d6020527f64f63e8728b8a1c8ce5fe5058430331934c8d0c3d8a2f2793f19836c1447addb54610dc19084614205565b610d7091906140d8565b33610dd581612a0a565b610dde82612a0a565b610dea816007546125ec565b610df48183611ab9565b6001600160a01b0382166000908152601b6020908152604080832080546001600160a01b0319169055601c9091528120805460019290610e359084906140c0565b90915550506040516001600160a01b0382811682528316907fd02c5b1545037b2e015abaaa2580767d71dae3bf3f220b2c8f0a7c28641a6aaa906020015b60405180910390a25050565b610eb16040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b6000610ebc8361214c565b9050805160001415610efc576040518060a00160405280600081526020016000815260200160008152602001600081526020016000815250915050919050565b6000610f07826123a8565b90506000610f158383612702565b90506000838381518110610f3957634e487b7160e01b600052603260045260246000fd5b602002602001015190506000848381518110610f6557634e487b7160e01b600052603260045260246000fd5b6020908102919091018101516000898152600f83526040808220815160a08101835281546001600160a01b031681526001820154958101959095526002810154918501919091526003810154606085015260040154608084015290925090610fd0908490849061120c565b6040805160a08101825291825260208201969096529485019390935260608401919091526080830152509392505050565b6000601d600083600a81111561102757634e487b7160e01b600052602160045260246000fd5b8152602001908152602001600020549050919050565b6040805160a080820183526000808352602080840182905283850182905260608085018390526080948501839052868352600f82528583208651948501875280546001600160a01b0316855260018101548584015260028101548588015260038101548583015260040154948401949094528582526011815290849020805485518184028101840190965280865292949290918301828280156110ff57602002820191906000526020600020905b8154815260200190600101908083116110eb575b50505050509050915091565b6011602052816000526040600020818154811061112757600080fd5b90600052602060002001600091509150505481565b7fd19a5fe801b7c1f3d54e7cd62d56e46f02f2ab5a22ee5edcfdddda6c80cf4c11546000828152600f60205260408120600201549091610d7091614288565b805160009060011415611193575060208101516111ab565b8151600214156111a8575060408101516111ab565b50825b9392505050565b60008281526013602090815260408083208484528252808320815160608101835281546001600160a01b0316815260018201549381018490526002909101549181018290529161120491869190612573565b949350505050565b60008315801561121a575082155b15611227575060006111ab565b82611234575060016111ab565b83611241575060026111ab565b6000808052601d6020527f0a51588b1664495f089dd83d2d26f247920f94a57a4a09f20cf068efc8f82bd45460808401516060850151919291611285908490614288565b61128f9190614106565b9050808561129d8489614288565b6112a79190614106565b106112b7576001925050506111ab565b80866112c38488614288565b6112cd9190614106565b106112dd576002925050506111ab565b8180866112ea828a614288565b6112f49190614106565b1061130557600393505050506111ab565b5060049695505050505050565b6000838152601d602052604080822054838352908220548161137b5760405162461bcd60e51b815260206004820152601660248201527f6c617572656c3120646f6573206e6f742065786973740000000000000000000060448201526064015b60405180910390fd5b600081116113cb5760405162461bcd60e51b815260206004820152601660248201527f6c617572656c3220646f6573206e6f74206578697374000000000000000000006044820152606401611372565b60008681526018602052604080822054868352912054816113f7576006546113f4906001614288565b91505b8061140d5760065461140a906001614288565b90505b6114178383614288565b876114228684614288565b61142c9190614205565b61143691906140d8565b98975050505050505050565b60008061144e8461113c565b90508083116111ab5782611204565b33600061146982612a0a565b61147684602001516120a3565b6000858152600f60205260409020546001600160a01b0316156114db5760405162461bcd60e51b815260206004820152601760248201527f5461736b20616c726561647920726567697374657265640000000000000000006044820152606401611372565b821561156c57506007546004546114f3908284612ca9565b6000858152601760209081526040808320600380855290835281842080546001810182559085528385200180546001600160a01b0319166001600160a01b0388161790556007548985526016845282852091855290835281842084805290925282208054919290916115669084906140c0565b90915550505b61157f8460200151856040015184612ca9565b61158d828560200151612671565b6040805160a0810182526001600160a01b03848116825260208781015181840190815288850180518587019081526060808c01519087019081526080808d015190880190815260008e8152600f8752898120985189549089166001600160a01b0319918216178a5595516001808b019190915593516002808b019190915592516003808b019190915591516004909901989098558154601387528989208980528752898920805487169189169190911790558154838952898920805487169189169190911790558154918852888820805490951691909616179092558a8552601183529484208054808301825581865292852092830185905580548083018255830185905580549182019055019190915590516116ac91879184612ce6565b60405185907fc7790ed2b3070179fd31a37f4ee1b2b9bd803aebb3fc047c7790ac47f63a553290600090a25050505050565b61170b604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b50600091825260136020908152604080842092845291815291819020815160608101835281546001600160a01b03168152600182015493810193909352600201549082015290565b6000805461176090614329565b80601f016020809104026020016040519081016040528092919081815260200182805461178c90614329565b80156117d95780601f106117ae576101008083540402835291602001916117d9565b820191906000526020600020905b8154815290600101906020018083116117bc57829003601f168201915b505050505081565b6000816040516020016117f49190613eff565b604051602081830303815290604052805190602001209050919050565b3361181b81612a0a565b6001600160a01b038082166000908152601b60205260409020541661183f81612a0a565b6001600160a01b0382166000908152601a602090815260408083208684529091528120549061186e858361220b565b9050600061187b82610d76565b6001600160a01b0386166000908152601a602090815260408083208a8452909152812081905590915082126118ce576118b5868487612e12565b6118c9866118c385856142a7565b87612e45565b6118ff565b6118e1866118db85614379565b87612ca9565b6118ff86846118ef85614379565b6118f99190614081565b87612e8d565b6001600160a01b0384166000908152601a6020908152604080832089845290915281208054839290611932908490614081565b9091555050604080516001600160a01b0387168152602081018890529081018390527fc495c3b7a071fbe283824381de7e9881c56508ad6a570e1154ef4d3153cb4b729060600160405180910390a1505050505050565b600061199882600001516117e1565b90506119a3816126e3565b15611a165760405162461bcd60e51b815260206004820152602660248201527f4c617572656c20616c7265616479206578697374732e205573652070726f706f60448201527f7365436f656600000000000000000000000000000000000000000000000000006064820152608401611372565b611a278160001c8360200151611d00565b81516000828152601f602090815260409091208251611a4b93919290910190613833565b505050565b600c8181548110611a6057600080fd5b600091825260209091200154905081565b600081815260116020526040812054815b81811015611ab257611a9484826111b2565b611a9e90846140c0565b925080611aaa8161435e565b915050611a82565b5050919050565b611ac38282610cfa565b611b0f5760405162461bcd60e51b815260206004820152601460248201527f4e6f74206f6e20616e636573746f72206c696e650000000000000000000000006044820152606401611372565b5050565b60008213611b635760405162461bcd60e51b815260206004820152601860248201527f43616e6e6f742065786368616e6765206e6567617469766500000000000000006044820152606401611372565b600454831415611bb55760405162461bcd60e51b815260206004820152601260248201527f43616e6e6f742065786368616e676520414c00000000000000000000000000006044820152606401611372565b600454811415611c075760405162461bcd60e51b815260206004820152601260248201527f43616e6e6f742065786368616e676520414c00000000000000000000000000006044820152606401611372565b336000611c15858585611312565b6001600160a01b0383166000908152601960209081526040808320898452909152902054909150841315611c8b5760405162461bcd60e51b815260206004820181905260248201527f43616e6e6f742065786368616e6765206e656761746976652062616c616e63656044820152606401611372565b611c96858584612e8d565b611ca1838284612e45565b604080516001600160a01b03841681526020810187905290810185905260608101849052608081018290527f3531ced80b5e7b5ad64b6a0861035f145d6b9498137cc778f19aceef688c8a709060a00160405180910390a15050505050565b6000828152600f60205260409020543390839083906001600160a01b0316611d7957611d79826040518060a00160405280866001600160a01b031681526020016004548152602001611d526008611001565b8152602001611d616009611001565b8152602001611d70600a611001565b9052600061145d565b60008281526011602090815260408083205481516001600160a01b0388168185015280830187905260608082018390528351808303909101815260809091018352805190840120808552601e909352922054158015611de757506000818152601e6020526040902060010154155b611e335760405162461bcd60e51b815260206004820152601560248201527f50726f706f73616c20616c7265616479206d61646500000000000000000000006044820152606401611372565b60408051808201825288815260208082018981526000858152601e8352848120935184559051600190930192909255868252600f905290812060020154611e7f9086908690899061285a565b9050808314611e9e57634e487b7160e01b600052600160045260246000fd5b5050505050505050565b60008181526010602052604090205460ff16151560011415611f0c5760405162461bcd60e51b815260206004820152600b60248201527f5461736b206c6f636b65640000000000000000000000000000000000000000006044820152606401611372565b50565b60176020528260005260406000206020528160005260406000208181548110611f3757600080fd5b6000918252602090912001546001600160a01b0316925083915050565b6000805b600d54811015611ff6576000600d8281548110611f8557634e487b7160e01b600052603260045260246000fd5b90600052602060002001549050611fa8816000908152601d602052604090205490565b6001600160a01b0385166000908152601960209081526040808320858452909152902054611fd69190614205565b611fe09084614081565b9250508080611fee9061435e565b915050611f58565b50919050565b3361200681612a0a565b61200f84611ea8565b61201c6004548383612ca9565b600084815260176020908152604080832086845282528083208054600181018255908452828420810180546001600160a01b0319166001600160a01b03871617905587845260168352818420878552835281842081855290925282208054919285926120899084906140c0565b9091555061209c90508585600086612ce6565b5050505050565b6120ac816126e3565b611f0c5760405162461bcd60e51b815260206004820152601560248201527f4c617572656c206e6f74207265676973746572656400000000000000000000006044820152606401611372565b600081815260116020526040812054815b81811015611ab257600084815260136020908152604080832084845290915290206002015461213890846140c0565b9250806121448161435e565b915050612109565b6000818152601160205260408120546060918167ffffffffffffffff81111561218557634e487b7160e01b600052604160045260246000fd5b6040519080825280602002602001820160405280156121ae578160200160208202803683370190505b50905060005b82811015612203576121c685826111b2565b8282815181106121e657634e487b7160e01b600052603260045260246000fd5b6020908102919091010152806121fb8161435e565b9150506121b4565b509392505050565b60036000908152601d6020527f628971151cb24dee737f6abea9bff35ce226e4c8f5760305d49b3725728390905460045484141561227157506004600052601d6020527fd33c65680209da0447188026adeb57acbe6c3d3a2b5b9c4ecef4d7a917168fd7545b60085461227e8285614205565b61120491906140d8565b3361229281612a0a565b6001600160a01b0382166000908152601c60205260408120541580159190826122d457506001600160a01b038481166000908152601b60205260409020541615155b801561230057506001600160a01b038481166000908152601b6020526040808220548316825290205416155b9050600082158015612310575081155b905080156123265761232185612ed5565b61239e565b8215612371576001600160a01b0385166000908152601c60205260408120546007546123529190614288565b905061235e85826125ec565b61236b6004548287612e8d565b5061239e565b811561239e576001600160a01b0385166000908152601b6020526040902080546001600160a01b03191690555b61209c8486612f2c565b6000805b8251811015611ff6578282815181106123d557634e487b7160e01b600052603260045260246000fd5b60200260200101518382815181106123fd57634e487b7160e01b600052603260045260246000fd5b6020026020010151111561240f578091505b806124198161435e565b9150506123ac565b61242a33612a0a565b61243383611ea8565b33600383101561244e57612448848484611ffc565b50505050565b6000848152600f6020908152604091829020825160a08101845281546001600160a01b031681526001820154928101839052600282015493810193909352600381015460608401526004015460808301526124aa908484612ca9565b6124b8828260200151612671565b61209c8585856000612ce6565b6001546001600160a01b0316331461250e5760405162461bcd60e51b815260206004820152600c60248201526b1d5b985d5d1a1bdc9a5e995960a21b6044820152606401611372565b600b5460ff166125605760405162461bcd60e51b815260206004820152601560248201527f736574757020706861736520697320636c6f73656400000000000000000000006044820152606401611372565b8051611b0f90600c9060208401906138b7565b600080600554600a612585919061415d565b7f9de6abd965d55c3bb0cdbf6fa175050624c6ff8fe86f682dc08f2a450ede2278546000878152600f60205260409020600201546125c39190614288565b6125cd9190614106565b90506125d98184614288565b6125e390856140c0565b95945050505050565b6001600160a01b03821660009081526019602090815260408083206004548452909152902054811315611b0f5760405162461bcd60e51b815260206004820152600d60248201527f4e6f7420656e6f75676820414c000000000000000000000000000000000000006044820152606401611372565b600d8181548110611a6057600080fd5b6001600160a01b03821660009081526019602090815260408083208484529091528120541215611b0f5760405162461bcd60e51b815260206004820152601260248201527f4e6f7420656e6f7567682062616c616e636500000000000000000000000000006044820152606401611372565b6000818152601d6020526040812054811080610d705750506004541490565b6000805b83518110156127875783828151811061272f57634e487b7160e01b600052603260045260246000fd5b602002602001015184828151811061275757634e487b7160e01b600052603260045260246000fd5b602002602001015111801561276c5750808314155b15612775578091505b8061277f8161435e565b915050612706565b5092915050565b6000818152601160205260408120546060918167ffffffffffffffff8111156127c757634e487b7160e01b600052604160045260246000fd5b6040519080825280602002602001820160405280156127f0578160200160208202803683370190505b50905060005b82811015612203576000858152601360209081526040808320848452909152902060020154825183908390811061283d57634e487b7160e01b600052603260045260246000fd5b6020908102919091010152806128528161435e565b9150506127f6565b60003361286681612a0a565b61286f84612a0a565b61287886611ea8565b6000868152601260209081526040808320888452909152902054156128df5760405162461bcd60e51b815260206004820152600d60248201527f4f7074696f6e20657869737473000000000000000000000000000000000000006044820152606401611372565b6000868152601160209081526040822080546001808201835591845291909220810187905592506129119083906140c0565b6000878152601260209081526040808320898452825280832093909355888252600f905220600201548310156129895760405162461bcd60e51b815260206004820152601c60248201527f436c61696d20616d6f756e74206d7573742062652067726561746572000000006044820152606401611372565b6000868152601360209081526040808320858452909152902080546001600160a01b0319166001600160a01b0386161790556129c6868385612421565b604080518681526020810184905287917fe339c372a63d3e4cdad9a9169af886e4c7527413fc2f7769736c5320f3255d72910160405180910390a250949350505050565b6001600160a01b038181166000908152601b602052604090205416151580612a3f57506002546001600160a01b038281169116145b611f0c5760405162461bcd60e51b815260206004820152600f60248201527f4e6f74206120766f6c756e7465657200000000000000000000000000000000006044820152606401611372565b6001546001600160a01b03163314612ad45760405162461bcd60e51b815260206004820152600c60248201526b1d5b985d5d1a1bdc9a5e995960a21b6044820152606401611372565b600b5460ff16612b265760405162461bcd60e51b815260206004820152601560248201527f736574757020706861736520697320636c6f73656400000000000000000000006044820152606401611372565b60005b8151811015611b0f576000612b68838381518110612b5757634e487b7160e01b600052603260045260246000fd5b6020026020010151600001516117e1565b600d80546001810182556000919091527fd7b6990105719101dabeb77144f2a3385c8033acd3af97e9423a695e81ad1eb5018190558351909150839083908110612bc257634e487b7160e01b600052603260045260246000fd5b602090810291909101810151516000838152601f8352604090208151612bed93919290910190613833565b50828281518110612c0e57634e487b7160e01b600052603260045260246000fd5b602002602001015160200151601d60008360001c815260200190815260200160002081905550612c418160095433612e45565b5080612c4c8161435e565b915050612b29565b6001546001600160a01b03163314612c9d5760405162461bcd60e51b815260206004820152600c60248201526b1d5b985d5d1a1bdc9a5e995960a21b6044820152606401611372565b600b805460ff19169055565b6001600160a01b038116600090815260196020908152604080832086845290915281208054849290612cdc9084906142a7565b9091555050505050565b6000848152601360209081526040808320868452909152812060018101805491928592612d149084906140c0565b9250508190555081816002016000828254612d2f91906140c0565b909155508590507f5cd95b2479bafc9329fca4929294f537f41652f18ab66a54865114597bd05b9b858585612d65858383612573565b60408051948552602085019390935291830152606082015260800160405180910390a2612d9185611a71565b6000868152600f6020526040902060020154612dac90612ff2565b1115612db85750612448565b60008581526014602052604081205490612dd187610e7f565b90506000612dde88610e7f565b9050612def8383600001518361117b565b60008981526014602052604090208190558251611e9e918a91869190858c61300b565b6001600160a01b038116600090815260196020908152604080832086845290915281208054849290612cdc908490614081565b60008381526018602052604081208054849290612e639084906140c0565b925050819055508160036000828254612e7c91906140c0565b90915550611a4b9050838383612e12565b60008381526018602052604081208054849290612eab9084906142e6565b925050819055508160036000828254612ec491906142e6565b90915550611a4b9050838383612ca9565b60005b600c54811015611b0f57612f1a600c8281548110612f0657634e487b7160e01b600052603260045260246000fd5b9060005260206000200154600a5484612e45565b80612f248161435e565b915050612ed8565b6001600160a01b038181166000908152601b60205260409020541615612f945760405162461bcd60e51b815260206004820152601260248201527f416c7265616479207265676973746572656400000000000000000000000000006044820152606401611372565b6001600160a01b038181166000818152601b602090815260409182902080546001600160a01b031916948716948517905590519182527f5d5df5e56200e3e6f92ac0067b9efa454a00ce9fc7109394e4a8722bd04701039101610e73565b60006001613001836002614288565b610d7091906142e6565b6000868152601360209081526040808320878452909152812060020154600110613060576006600052601d6020527fe05f340630215c2ef0683a72fde801183a1a4ecac14ded57e11c794e9bcb20695461308d565b6007600052601d6020527f0b2bb571a71764032d04342d0eb422bc5d6eeb3c436078b13e30f0762c04c504545b600088815260156020526040902054909150811161316a576000878152601060209081526040808320805460ff1916600190811790915560148352818420849055601383528184208a8552835292819020815160608101835281546001600160a01b03168152938101549284018390526002015490830152613110908990611442565b81516001600160a01b03166000908152601a602090815260408083208c8452600f8352818420600101548452909152812080549091906131519084906142a7565b909155506131639050888860016135bc565b50506135b4565b84861461343857851561328557856000887ff231a86816e29158d16d28756302ac7c8c04ffef2f5206456abe551907d5a00e86602001518760400151886060015189608001516040516131d6949392919093845260208401929092526040830152606082015260800190565b60405180910390a46000878152601360209081526040808320898452825291829020825160608101845281546001600160a01b03168152600182015492810183905260029091015492810192909252613230908990611442565b81516001600160a01b03166000908152601a602090815260408083208c8452600f8352818420600101548452909152812080549091906132719084906142a7565b909155506132839050888860016135bc565b505b846001887ff231a86816e29158d16d28756302ac7c8c04ffef2f5206456abe551907d5a00e86602001518760400151886060015189608001516040516132e4949392919093845260208401929092526040830152606082015260800190565b60405180910390a46000878152601360209081526040808320888452825291829020825160608101845281546001600160a01b0316815260018201549281018390526002909101549281019290925261333e908990611442565b81516001600160a01b03166000908152601a602090815260408083208c8452600f83528184206001015484529091528120805490919061337f908490614081565b909155506133919050888760006135bc565b60008881526015602052604081208054600192906133b09084906140c0565b90915550508051604080516001600160a01b03909216602083015281018990526060810184905260009060800160408051601f1981840301815291815281516020928301206000818152601e90935291205490915015158061342257506000818152601e602052604090206001015415155b15613435576134358183600001516137a4565b50505b848614801561344657508185145b1561350a576000878152601360209081526040808320888452825291829020825160608101845281546001600160a01b0316815260018201549281018390526002909101549281019290925261349d908990611442565b81516001600160a01b03166000908152601a602090815260408083208c8452600f835281842060010154845290915290819020919091558101516134e2908990611442565b90516001600160a01b03166000908152601a6020908152604080832060045484529091529020555b825184141561351957506135b4565b83600314801561352c5750826020015185145b8061354557508360041480156135455750826040015185145b156135b257846002887ff231a86816e29158d16d28756302ac7c8c04ffef2f5206456abe551907d5a00e86602001518760400151886060015189608001516040516135a9949392919093845260208401929092526040830152606082015260800190565b60405180910390a45b505b505050505050565b60006135c7846120f8565b6000858152601360209081526040808320878452825291829020825160608101845281546001600160a01b031681526001820154928101929092526002015491810182905291925061361990836142e6565b6000868152601760209081526040808320888452825280832089845260168352818420898552909252822092945091905b8254811015611e9e576040808501516000838152602085905291822054613672908890614288565b61367c9190614106565b9050861561370d5760008281526020849052604090205461369d90826140c0565b601a60008685815481106136c157634e487b7160e01b600052603260045260246000fd5b60009182526020808320909101546001600160a01b0316835282810193909352604091820181206004548252909252812080549091906137029084906142a7565b909155506137919050565b60008281526020849052604090205461372690826140c0565b601a600086858154811061374a57634e487b7160e01b600052603260045260246000fd5b60009182526020808320909101546001600160a01b03168352828101939093526040918201812060045482529092528120805490919061378b908490614081565b90915550505b508061379c8161435e565b91505061364a565b6000828152601e602052604090208054600190910154600e5482111561381f576000828152601d6020526040902054829061381d57600d80546001810182556000919091527fd7b6990105719101dabeb77144f2a3385c8033acd3af97e9423a695e81ad1eb50181905560095461381d90829086612e45565b505b6000918252601d6020526040909120555050565b82805461383f90614329565b90600052602060002090601f01602090048101928261386157600085556138a7565b82601f1061387a57805160ff19168380011785556138a7565b828001600101855582156138a7579182015b828111156138a757825182559160200191906001019061388c565b506138b39291506138f1565b5090565b8280548282559060005260206000209081019282156138a757916020028201828111156138a757825182559160200191906001019061388c565b5b808211156138b357600081556001016138f2565b80356001600160a01b038116811461391d57600080fd5b919050565b600082601f830112613932578081fd5b813560206139476139428361405d565b61402c565b80838252828201915082860187848660051b8901011115613966578586fd5b855b8581101561398457813584529284019290840190600101613968565b5090979650505050505050565b600082601f8301126139a1578081fd5b813567ffffffffffffffff8111156139bb576139bb6143bf565b6139ce601f8201601f191660200161402c565b8181528460208386010111156139e2578283fd5b816020850160208301379081016020019190915292915050565b600060408284031215613a0d578081fd5b6040516040810167ffffffffffffffff8282108183111715613a3157613a316143bf565b816040528293508435915080821115613a4957600080fd5b50613a5685828601613991565b825250602083013560208201525092915050565b600060a08284031215613a7b578081fd5b613a83614003565b9050613a8e82613906565b81526020820135602082015260408201356040820152606082013560608201526080820135608082015292915050565b600060208284031215613acf578081fd5b6111ab82613906565b60008060408385031215613aea578081fd5b613af383613906565b9150613b0160208401613906565b90509250929050565b60008060408385031215613b1c578182fd5b613b2583613906565b946020939093013593505050565b60006020808385031215613b45578182fd5b823567ffffffffffffffff811115613b5b578283fd5b8301601f81018513613b6b578283fd5b8035613b796139428261405d565b80828252848201915084840188868560051b8701011115613b98578687fd5b8694505b83851015613bba578035835260019490940193918501918501613b9c565b50979650505050505050565b60006020808385031215613bd8578182fd5b823567ffffffffffffffff80821115613bef578384fd5b818501915085601f830112613c02578384fd5b8135613c106139428261405d565b80828252858201915085850189878560051b8801011115613c2f578788fd5b875b84811015613c6857813586811115613c4757898afd5b613c558c8a838b01016139fc565b8552509287019290870190600101613c31565b50909998505050505050505050565b600060208284031215613c88578081fd5b813567ffffffffffffffff811115613c9e578182fd5b61120484828501613922565b60008060408385031215613cbc578182fd5b823567ffffffffffffffff811115613cd2578283fd5b613cde85828601613922565b95602094909401359450505050565b600060208284031215613cfe578081fd5b5035919050565b60008060408385031215613d17578182fd5b50508035926020909101359150565b60008060008060808587031215613d3b578182fd5b8435935060208501359250613d5260408601613906565b9396929550929360600135925050565b600080600060608486031215613d76578081fd5b505081359360208301359350604090920135919050565b600080600060e08486031215613da1578081fd5b83359250613db28560208601613a6a565b915060c08401358015158114613dc6578182fd5b809150509250925092565b600060208284031215613de2578081fd5b8135600b81106111ab578182fd5b600060208284031215613e01578081fd5b813567ffffffffffffffff811115613e17578182fd5b61120484828501613991565b600060208284031215613e34578081fd5b813567ffffffffffffffff811115613e4a578182fd5b611204848285016139fc565b600080600083850360e0811215613e6b578182fd5b843593506020850135925060a0603f1982011215613e87578182fd5b50613e90614003565b60408501358152606085013560208201526080850135604082015260a0850135606082015260c08501356080820152809150509250925092565b600080600060e08486031215613ede578081fd5b8335925060208401359150613ef68560408601613a6a565b90509250925092565b60008251613f118184602087016142fd565b9190910192915050565b6020808252825182820181905260009190848201906040850190845b81811015613f5357835183529284019291840191600101613f37565b50909695505050505050565b6020815260008251806020840152613f7e8160408501602087016142fd565b601f01601f19169190910160400192915050565b600060c082016001600160a01b0385511683526020808601518185015260408601516040850152606086015160608501526080860151608085015260c060a085015281855180845260e0860191508287019350845b8181101561398457845183529383019391830191600101613fe7565b60405160a0810167ffffffffffffffff81118282101715614026576140266143bf565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715614055576140556143bf565b604052919050565b600067ffffffffffffffff821115614077576140776143bf565b5060051b60200190565b6000808212826001600160ff1b03038413811516156140a2576140a2614393565b82600160ff1b0384128116156140ba576140ba614393565b50500190565b600082198211156140d3576140d3614393565b500190565b6000826140e7576140e76143a9565b600160ff1b82146000198414161561410157614101614393565b500590565b600082614115576141156143a9565b500490565b600181815b8085111561415557816000190482111561413b5761413b614393565b8085161561414857918102915b93841c939080029061411f565b509250929050565b60006111ab838360008261417357506001610d70565b8161418057506000610d70565b816001811461419657600281146141a0576141bc565b6001915050610d70565b60ff8411156141b1576141b1614393565b50506001821b610d70565b5060208310610133831016604e8410600b84101617156141df575081810a610d70565b6141e9838361411a565b80600019048211156141fd576141fd614393565b029392505050565b60006001600160ff1b038184138284138583048511828216161561422b5761422b614393565b600160ff1b8487128682058812818416161561424957614249614393565b85871292508782058712848416161561426457614264614393565b8785058712818416161561427a5761427a614393565b505050929093029392505050565b60008160001904831182151516156142a2576142a2614393565b500290565b600080831283600160ff1b018312811516156142c5576142c5614393565b836001600160ff1b030183138116156142e0576142e0614393565b50500390565b6000828210156142f8576142f8614393565b500390565b60005b83811015614318578181015183820152602001614300565b838111156124485750506000910152565b600181811c9082168061433d57607f821691505b60208210811415611ff657634e487b7160e01b600052602260045260246000fd5b600060001982141561437257614372614393565b5060010190565b6000600160ff1b82141561438f5761438f614393565b0390565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea26469706673582212202dc8828b20c0ee9d51fd3864da364b3aabee4547b2f7df470aac75dca1a18aba64736f6c63430008040033f231a86816e29158d16d28756302ac7c8c04ffef2f5206456abe551907d5a00e",
    "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106105145760003560e01c80637731a2b8116102a1578063b905b2791161016b578063d79ff1f2116100e3578063eb60b00811610097578063f18d45291161007c578063f18d452914610cbc578063f264117e14610ccf578063ff35db1914610cd757600080fd5b8063eb60b00814610caa578063ee46b52d14610cb357600080fd5b8063d8b3c2a4116100c8578063d8b3c2a414610be8578063e579f50014610c11578063e8397ace14610c8a57600080fd5b8063d79ff1f214610bc2578063d7b63b1f14610bd557600080fd5b8063c4ea5c771161013a578063cdf6e85e1161011f578063cdf6e85e14610b89578063ceac82f514610b9c578063d12632b614610baf57600080fd5b8063c4ea5c7714610b40578063c79d5ec514610b5357600080fd5b8063b905b27914610af4578063bdf6d80e14610b07578063be9b080814610b1a578063c21a50e714610b2d57600080fd5b8063810b05e911610219578063a8e926a4116101cd578063af4a05f0116101b2578063af4a05f014610a9d578063b0f75a1614610ace578063b5a5eb8614610ae157600080fd5b8063a8e926a414610a6a578063a96842d714610a7d57600080fd5b80639a428df9116101fe5780639a428df914610a2e5780639f89073f14610a4e578063a2ed1f7314610a5757600080fd5b8063810b05e914610a12578063907af6c014610a2557600080fd5b80637ac3177a116102705780637c3dbceb116102555780637c3dbceb146109cc5780637e964d89146109df57806380e10204146109ff57600080fd5b80637ac3177a146109b05780637b80fc8f146109c357600080fd5b80637731a2b81461096557806378600a4f1461097857806378900a581461098357806379ca5eeb146109a357600080fd5b80634277f4fd116103e257806361338ada1161035a5780636b9f64af1161030e578063709b0bfd116102f3578063709b0bfd1461092c57806374fe85761461093f57806375e852951461095257600080fd5b80636b9f64af14610906578063705a27181461091957600080fd5b806369eb12f21161033f57806369eb12f2146108b55780636b08c0b3146108e05780636b8630e9146108f357600080fd5b806361338ada1461088f57806368c16144146108a257600080fd5b806351351d53116103b15780635474dac0116103965780635474dac01461081c57806354d9be591461085a57806354fd4d501461087a57600080fd5b806351351d53146107c657806353b53172146107f157600080fd5b80634277f4fd146107175780634bb9f7cd146107375780634c6fcaad146107a05780634d430bf9146107b357600080fd5b8063196022e611610490578063309a788f1161044457806333aca55b1161042957806333aca55b146106d15780633531f2fc146106e457806335d11e841461070457600080fd5b8063309a788f146106b5578063313ce567146106c857600080fd5b806320f944271161047557806320f944271461067c5780632563e9a31461068f5780632ee423d4146106a257600080fd5b8063196022e6146106485780631f14df691461065157600080fd5b806312ea347b116104e75780631616bbf2116104cc5780631616bbf21461060057806317c416551461063657806318160ddd1461063f57600080fd5b806312ea347b146105cc57806315a29035146105df57600080fd5b806305a7304b1461051957806308b574e414610541578063095ac404146105625780630cfe734d14610577575b600080fd5b61052c610527366004613ad8565b610cfa565b60405190151581526020015b60405180910390f35b61055461054f366004613ced565b610d76565b604051908152602001610538565b610575610570366004613abe565b610dcb565b005b61058a610585366004613ced565b610e7f565b6040516105389190600060a082019050825182526020830151602083015260408301516040830152606083015160608301526080830151608083015292915050565b6105546105da366004613dd1565b611001565b6105f26105ed366004613ced565b61103d565b604051610538929190613f92565b61055461060e366004613b0a565b6001600160a01b03919091166000908152601a60209081526040808320938352929052205490565b610554600a5481565b61055460035481565b61055460085481565b61055461065f366004613b0a565b601960209081526000928352604080842090915290825290205481565b61055461068a366004613d05565b61110b565b61055461069d366004613ced565b61113c565b6105546106b0366004613e56565b61117b565b6105546106c3366004613d05565b6111b2565b61055460055481565b6105546106df366004613eca565b61120c565b6105546106f2366004613ced565b60186020526000908152604090205481565b610554610712366004613d62565b611312565b610554610725366004613ced565b60146020526000908152604090205481565b61077b610745366004613d05565b60136020908152600092835260408084209091529082529020805460018201546002909201546001600160a01b03909116919083565b604080516001600160a01b039094168452602084019290925290820152606001610538565b6105546107ae366004613d05565b611442565b6105756107c1366004613d8d565b61145d565b6002546107d9906001600160a01b031681565b6040516001600160a01b039091168152602001610538565b6105546107ff366004613d05565b601260209081526000928352604080842090915290825290205481565b61082f61082a366004613d05565b6116de565b6040805182516001600160a01b03168152602080840151908201529181015190820152606001610538565b610554610868366004613ced565b60009081526018602052604090205490565b610882611753565b6040516105389190613f5f565b61055461089d366004613df0565b6117e1565b6105756108b0366004613ced565b611811565b6105546108c3366004613b0a565b601a60209081526000928352604080842090915290825290205481565b6105756108ee366004613e23565b611989565b610554610901366004613ced565b611a50565b610554610914366004613ced565b611a71565b610575610927366004613ad8565b611ab9565b61057561093a366004613d62565b611b13565b61057561094d366004613d05565b611d00565b610575610960366004613ced565b611ea8565b6107d9610973366004613d62565b611f0f565b600b5460ff1661052c565b610554610991366004613ced565b6000908152601d602052604090205490565b600b5461052c9060ff1681565b6105546109be366004613abe565b611f54565b61055460075481565b6105756109da366004613d62565b611ffc565b6105546109ed366004613abe565b601c6020526000908152604090205481565b610575610a0d366004613ced565b6120a3565b610554610a20366004613ced565b6120f8565b61055460065481565b610a41610a3c366004613ced565b61214c565b6040516105389190613f1b565b61055460095481565b610554610a65366004613d05565b61220b565b610575610a78366004613abe565b612288565b610554610a8b366004613ced565b601d6020526000908152604090205481565b610554610aab366004613d62565b601660209081526000938452604080852082529284528284209052825290205481565b610554610adc366004613c77565b6123a8565b610575610aef366004613d62565b612421565b610575610b02366004613b33565b6124c5565b610554610b15366004613d62565b612573565b610575610b28366004613b0a565b6125ec565b610554610b3b366004613ced565b612661565b610575610b4e366004613b0a565b612671565b610554610b61366004613b0a565b6001600160a01b03919091166000908152601960209081526040808320938352929052205490565b61052c610b97366004613ced565b6126e3565b610554610baa366004613caa565b612702565b610a41610bbd366004613ced565b61278e565b610554610bd0366004613d26565b61285a565b610575610be3366004613abe565b612a0a565b6107d9610bf6366004613abe565b601b602052600090815260409020546001600160a01b031681565b610c58610c1f366004613ced565b600f60205260009081526040902080546001820154600283015460038401546004909401546001600160a01b0390931693919290919085565b604080516001600160a01b0390961686526020860194909452928401919091526060830152608082015260a001610538565b610554610c98366004613ced565b60156020526000908152604090205481565b610554600e5481565b61055460045481565b610575610cca366004613bc6565b612a8b565b610575612c54565b61052c610ce5366004613ced565b60106020526000908152604090205460ff1681565b6000815b6001600160a01b038082166000908152601b60205260409020548116908516811415610d2f57600192505050610d70565b6002546001600160a01b0382811691161415610d5057600092505050610d70565b6001600160a01b038116610d6957600092505050610d70565b9050610cfe565b92915050565b600080821215610d8857506000919050565b6008546002600052601d6020527f64f63e8728b8a1c8ce5fe5058430331934c8d0c3d8a2f2793f19836c1447addb54610dc19084614205565b610d7091906140d8565b33610dd581612a0a565b610dde82612a0a565b610dea816007546125ec565b610df48183611ab9565b6001600160a01b0382166000908152601b6020908152604080832080546001600160a01b0319169055601c9091528120805460019290610e359084906140c0565b90915550506040516001600160a01b0382811682528316907fd02c5b1545037b2e015abaaa2580767d71dae3bf3f220b2c8f0a7c28641a6aaa906020015b60405180910390a25050565b610eb16040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b6000610ebc8361214c565b9050805160001415610efc576040518060a00160405280600081526020016000815260200160008152602001600081526020016000815250915050919050565b6000610f07826123a8565b90506000610f158383612702565b90506000838381518110610f3957634e487b7160e01b600052603260045260246000fd5b602002602001015190506000848381518110610f6557634e487b7160e01b600052603260045260246000fd5b6020908102919091018101516000898152600f83526040808220815160a08101835281546001600160a01b031681526001820154958101959095526002810154918501919091526003810154606085015260040154608084015290925090610fd0908490849061120c565b6040805160a08101825291825260208201969096529485019390935260608401919091526080830152509392505050565b6000601d600083600a81111561102757634e487b7160e01b600052602160045260246000fd5b8152602001908152602001600020549050919050565b6040805160a080820183526000808352602080840182905283850182905260608085018390526080948501839052868352600f82528583208651948501875280546001600160a01b0316855260018101548584015260028101548588015260038101548583015260040154948401949094528582526011815290849020805485518184028101840190965280865292949290918301828280156110ff57602002820191906000526020600020905b8154815260200190600101908083116110eb575b50505050509050915091565b6011602052816000526040600020818154811061112757600080fd5b90600052602060002001600091509150505481565b7fd19a5fe801b7c1f3d54e7cd62d56e46f02f2ab5a22ee5edcfdddda6c80cf4c11546000828152600f60205260408120600201549091610d7091614288565b805160009060011415611193575060208101516111ab565b8151600214156111a8575060408101516111ab565b50825b9392505050565b60008281526013602090815260408083208484528252808320815160608101835281546001600160a01b0316815260018201549381018490526002909101549181018290529161120491869190612573565b949350505050565b60008315801561121a575082155b15611227575060006111ab565b82611234575060016111ab565b83611241575060026111ab565b6000808052601d6020527f0a51588b1664495f089dd83d2d26f247920f94a57a4a09f20cf068efc8f82bd45460808401516060850151919291611285908490614288565b61128f9190614106565b9050808561129d8489614288565b6112a79190614106565b106112b7576001925050506111ab565b80866112c38488614288565b6112cd9190614106565b106112dd576002925050506111ab565b8180866112ea828a614288565b6112f49190614106565b1061130557600393505050506111ab565b5060049695505050505050565b6000838152601d602052604080822054838352908220548161137b5760405162461bcd60e51b815260206004820152601660248201527f6c617572656c3120646f6573206e6f742065786973740000000000000000000060448201526064015b60405180910390fd5b600081116113cb5760405162461bcd60e51b815260206004820152601660248201527f6c617572656c3220646f6573206e6f74206578697374000000000000000000006044820152606401611372565b60008681526018602052604080822054868352912054816113f7576006546113f4906001614288565b91505b8061140d5760065461140a906001614288565b90505b6114178383614288565b876114228684614288565b61142c9190614205565b61143691906140d8565b98975050505050505050565b60008061144e8461113c565b90508083116111ab5782611204565b33600061146982612a0a565b61147684602001516120a3565b6000858152600f60205260409020546001600160a01b0316156114db5760405162461bcd60e51b815260206004820152601760248201527f5461736b20616c726561647920726567697374657265640000000000000000006044820152606401611372565b821561156c57506007546004546114f3908284612ca9565b6000858152601760209081526040808320600380855290835281842080546001810182559085528385200180546001600160a01b0319166001600160a01b0388161790556007548985526016845282852091855290835281842084805290925282208054919290916115669084906140c0565b90915550505b61157f8460200151856040015184612ca9565b61158d828560200151612671565b6040805160a0810182526001600160a01b03848116825260208781015181840190815288850180518587019081526060808c01519087019081526080808d015190880190815260008e8152600f8752898120985189549089166001600160a01b0319918216178a5595516001808b019190915593516002808b019190915592516003808b019190915591516004909901989098558154601387528989208980528752898920805487169189169190911790558154838952898920805487169189169190911790558154918852888820805490951691909616179092558a8552601183529484208054808301825581865292852092830185905580548083018255830185905580549182019055019190915590516116ac91879184612ce6565b60405185907fc7790ed2b3070179fd31a37f4ee1b2b9bd803aebb3fc047c7790ac47f63a553290600090a25050505050565b61170b604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b50600091825260136020908152604080842092845291815291819020815160608101835281546001600160a01b03168152600182015493810193909352600201549082015290565b6000805461176090614329565b80601f016020809104026020016040519081016040528092919081815260200182805461178c90614329565b80156117d95780601f106117ae576101008083540402835291602001916117d9565b820191906000526020600020905b8154815290600101906020018083116117bc57829003601f168201915b505050505081565b6000816040516020016117f49190613eff565b604051602081830303815290604052805190602001209050919050565b3361181b81612a0a565b6001600160a01b038082166000908152601b60205260409020541661183f81612a0a565b6001600160a01b0382166000908152601a602090815260408083208684529091528120549061186e858361220b565b9050600061187b82610d76565b6001600160a01b0386166000908152601a602090815260408083208a8452909152812081905590915082126118ce576118b5868487612e12565b6118c9866118c385856142a7565b87612e45565b6118ff565b6118e1866118db85614379565b87612ca9565b6118ff86846118ef85614379565b6118f99190614081565b87612e8d565b6001600160a01b0384166000908152601a6020908152604080832089845290915281208054839290611932908490614081565b9091555050604080516001600160a01b0387168152602081018890529081018390527fc495c3b7a071fbe283824381de7e9881c56508ad6a570e1154ef4d3153cb4b729060600160405180910390a1505050505050565b600061199882600001516117e1565b90506119a3816126e3565b15611a165760405162461bcd60e51b815260206004820152602660248201527f4c617572656c20616c7265616479206578697374732e205573652070726f706f60448201527f7365436f656600000000000000000000000000000000000000000000000000006064820152608401611372565b611a278160001c8360200151611d00565b81516000828152601f602090815260409091208251611a4b93919290910190613833565b505050565b600c8181548110611a6057600080fd5b600091825260209091200154905081565b600081815260116020526040812054815b81811015611ab257611a9484826111b2565b611a9e90846140c0565b925080611aaa8161435e565b915050611a82565b5050919050565b611ac38282610cfa565b611b0f5760405162461bcd60e51b815260206004820152601460248201527f4e6f74206f6e20616e636573746f72206c696e650000000000000000000000006044820152606401611372565b5050565b60008213611b635760405162461bcd60e51b815260206004820152601860248201527f43616e6e6f742065786368616e6765206e6567617469766500000000000000006044820152606401611372565b600454831415611bb55760405162461bcd60e51b815260206004820152601260248201527f43616e6e6f742065786368616e676520414c00000000000000000000000000006044820152606401611372565b600454811415611c075760405162461bcd60e51b815260206004820152601260248201527f43616e6e6f742065786368616e676520414c00000000000000000000000000006044820152606401611372565b336000611c15858585611312565b6001600160a01b0383166000908152601960209081526040808320898452909152902054909150841315611c8b5760405162461bcd60e51b815260206004820181905260248201527f43616e6e6f742065786368616e6765206e656761746976652062616c616e63656044820152606401611372565b611c96858584612e8d565b611ca1838284612e45565b604080516001600160a01b03841681526020810187905290810185905260608101849052608081018290527f3531ced80b5e7b5ad64b6a0861035f145d6b9498137cc778f19aceef688c8a709060a00160405180910390a15050505050565b6000828152600f60205260409020543390839083906001600160a01b0316611d7957611d79826040518060a00160405280866001600160a01b031681526020016004548152602001611d526008611001565b8152602001611d616009611001565b8152602001611d70600a611001565b9052600061145d565b60008281526011602090815260408083205481516001600160a01b0388168185015280830187905260608082018390528351808303909101815260809091018352805190840120808552601e909352922054158015611de757506000818152601e6020526040902060010154155b611e335760405162461bcd60e51b815260206004820152601560248201527f50726f706f73616c20616c7265616479206d61646500000000000000000000006044820152606401611372565b60408051808201825288815260208082018981526000858152601e8352848120935184559051600190930192909255868252600f905290812060020154611e7f9086908690899061285a565b9050808314611e9e57634e487b7160e01b600052600160045260246000fd5b5050505050505050565b60008181526010602052604090205460ff16151560011415611f0c5760405162461bcd60e51b815260206004820152600b60248201527f5461736b206c6f636b65640000000000000000000000000000000000000000006044820152606401611372565b50565b60176020528260005260406000206020528160005260406000208181548110611f3757600080fd5b6000918252602090912001546001600160a01b0316925083915050565b6000805b600d54811015611ff6576000600d8281548110611f8557634e487b7160e01b600052603260045260246000fd5b90600052602060002001549050611fa8816000908152601d602052604090205490565b6001600160a01b0385166000908152601960209081526040808320858452909152902054611fd69190614205565b611fe09084614081565b9250508080611fee9061435e565b915050611f58565b50919050565b3361200681612a0a565b61200f84611ea8565b61201c6004548383612ca9565b600084815260176020908152604080832086845282528083208054600181018255908452828420810180546001600160a01b0319166001600160a01b03871617905587845260168352818420878552835281842081855290925282208054919285926120899084906140c0565b9091555061209c90508585600086612ce6565b5050505050565b6120ac816126e3565b611f0c5760405162461bcd60e51b815260206004820152601560248201527f4c617572656c206e6f74207265676973746572656400000000000000000000006044820152606401611372565b600081815260116020526040812054815b81811015611ab257600084815260136020908152604080832084845290915290206002015461213890846140c0565b9250806121448161435e565b915050612109565b6000818152601160205260408120546060918167ffffffffffffffff81111561218557634e487b7160e01b600052604160045260246000fd5b6040519080825280602002602001820160405280156121ae578160200160208202803683370190505b50905060005b82811015612203576121c685826111b2565b8282815181106121e657634e487b7160e01b600052603260045260246000fd5b6020908102919091010152806121fb8161435e565b9150506121b4565b509392505050565b60036000908152601d6020527f628971151cb24dee737f6abea9bff35ce226e4c8f5760305d49b3725728390905460045484141561227157506004600052601d6020527fd33c65680209da0447188026adeb57acbe6c3d3a2b5b9c4ecef4d7a917168fd7545b60085461227e8285614205565b61120491906140d8565b3361229281612a0a565b6001600160a01b0382166000908152601c60205260408120541580159190826122d457506001600160a01b038481166000908152601b60205260409020541615155b801561230057506001600160a01b038481166000908152601b6020526040808220548316825290205416155b9050600082158015612310575081155b905080156123265761232185612ed5565b61239e565b8215612371576001600160a01b0385166000908152601c60205260408120546007546123529190614288565b905061235e85826125ec565b61236b6004548287612e8d565b5061239e565b811561239e576001600160a01b0385166000908152601b6020526040902080546001600160a01b03191690555b61209c8486612f2c565b6000805b8251811015611ff6578282815181106123d557634e487b7160e01b600052603260045260246000fd5b60200260200101518382815181106123fd57634e487b7160e01b600052603260045260246000fd5b6020026020010151111561240f578091505b806124198161435e565b9150506123ac565b61242a33612a0a565b61243383611ea8565b33600383101561244e57612448848484611ffc565b50505050565b6000848152600f6020908152604091829020825160a08101845281546001600160a01b031681526001820154928101839052600282015493810193909352600381015460608401526004015460808301526124aa908484612ca9565b6124b8828260200151612671565b61209c8585856000612ce6565b6001546001600160a01b0316331461250e5760405162461bcd60e51b815260206004820152600c60248201526b1d5b985d5d1a1bdc9a5e995960a21b6044820152606401611372565b600b5460ff166125605760405162461bcd60e51b815260206004820152601560248201527f736574757020706861736520697320636c6f73656400000000000000000000006044820152606401611372565b8051611b0f90600c9060208401906138b7565b600080600554600a612585919061415d565b7f9de6abd965d55c3bb0cdbf6fa175050624c6ff8fe86f682dc08f2a450ede2278546000878152600f60205260409020600201546125c39190614288565b6125cd9190614106565b90506125d98184614288565b6125e390856140c0565b95945050505050565b6001600160a01b03821660009081526019602090815260408083206004548452909152902054811315611b0f5760405162461bcd60e51b815260206004820152600d60248201527f4e6f7420656e6f75676820414c000000000000000000000000000000000000006044820152606401611372565b600d8181548110611a6057600080fd5b6001600160a01b03821660009081526019602090815260408083208484529091528120541215611b0f5760405162461bcd60e51b815260206004820152601260248201527f4e6f7420656e6f7567682062616c616e636500000000000000000000000000006044820152606401611372565b6000818152601d6020526040812054811080610d705750506004541490565b6000805b83518110156127875783828151811061272f57634e487b7160e01b600052603260045260246000fd5b602002602001015184828151811061275757634e487b7160e01b600052603260045260246000fd5b602002602001015111801561276c5750808314155b15612775578091505b8061277f8161435e565b915050612706565b5092915050565b6000818152601160205260408120546060918167ffffffffffffffff8111156127c757634e487b7160e01b600052604160045260246000fd5b6040519080825280602002602001820160405280156127f0578160200160208202803683370190505b50905060005b82811015612203576000858152601360209081526040808320848452909152902060020154825183908390811061283d57634e487b7160e01b600052603260045260246000fd5b6020908102919091010152806128528161435e565b9150506127f6565b60003361286681612a0a565b61286f84612a0a565b61287886611ea8565b6000868152601260209081526040808320888452909152902054156128df5760405162461bcd60e51b815260206004820152600d60248201527f4f7074696f6e20657869737473000000000000000000000000000000000000006044820152606401611372565b6000868152601160209081526040822080546001808201835591845291909220810187905592506129119083906140c0565b6000878152601260209081526040808320898452825280832093909355888252600f905220600201548310156129895760405162461bcd60e51b815260206004820152601c60248201527f436c61696d20616d6f756e74206d7573742062652067726561746572000000006044820152606401611372565b6000868152601360209081526040808320858452909152902080546001600160a01b0319166001600160a01b0386161790556129c6868385612421565b604080518681526020810184905287917fe339c372a63d3e4cdad9a9169af886e4c7527413fc2f7769736c5320f3255d72910160405180910390a250949350505050565b6001600160a01b038181166000908152601b602052604090205416151580612a3f57506002546001600160a01b038281169116145b611f0c5760405162461bcd60e51b815260206004820152600f60248201527f4e6f74206120766f6c756e7465657200000000000000000000000000000000006044820152606401611372565b6001546001600160a01b03163314612ad45760405162461bcd60e51b815260206004820152600c60248201526b1d5b985d5d1a1bdc9a5e995960a21b6044820152606401611372565b600b5460ff16612b265760405162461bcd60e51b815260206004820152601560248201527f736574757020706861736520697320636c6f73656400000000000000000000006044820152606401611372565b60005b8151811015611b0f576000612b68838381518110612b5757634e487b7160e01b600052603260045260246000fd5b6020026020010151600001516117e1565b600d80546001810182556000919091527fd7b6990105719101dabeb77144f2a3385c8033acd3af97e9423a695e81ad1eb5018190558351909150839083908110612bc257634e487b7160e01b600052603260045260246000fd5b602090810291909101810151516000838152601f8352604090208151612bed93919290910190613833565b50828281518110612c0e57634e487b7160e01b600052603260045260246000fd5b602002602001015160200151601d60008360001c815260200190815260200160002081905550612c418160095433612e45565b5080612c4c8161435e565b915050612b29565b6001546001600160a01b03163314612c9d5760405162461bcd60e51b815260206004820152600c60248201526b1d5b985d5d1a1bdc9a5e995960a21b6044820152606401611372565b600b805460ff19169055565b6001600160a01b038116600090815260196020908152604080832086845290915281208054849290612cdc9084906142a7565b9091555050505050565b6000848152601360209081526040808320868452909152812060018101805491928592612d149084906140c0565b9250508190555081816002016000828254612d2f91906140c0565b909155508590507f5cd95b2479bafc9329fca4929294f537f41652f18ab66a54865114597bd05b9b858585612d65858383612573565b60408051948552602085019390935291830152606082015260800160405180910390a2612d9185611a71565b6000868152600f6020526040902060020154612dac90612ff2565b1115612db85750612448565b60008581526014602052604081205490612dd187610e7f565b90506000612dde88610e7f565b9050612def8383600001518361117b565b60008981526014602052604090208190558251611e9e918a91869190858c61300b565b6001600160a01b038116600090815260196020908152604080832086845290915281208054849290612cdc908490614081565b60008381526018602052604081208054849290612e639084906140c0565b925050819055508160036000828254612e7c91906140c0565b90915550611a4b9050838383612e12565b60008381526018602052604081208054849290612eab9084906142e6565b925050819055508160036000828254612ec491906142e6565b90915550611a4b9050838383612ca9565b60005b600c54811015611b0f57612f1a600c8281548110612f0657634e487b7160e01b600052603260045260246000fd5b9060005260206000200154600a5484612e45565b80612f248161435e565b915050612ed8565b6001600160a01b038181166000908152601b60205260409020541615612f945760405162461bcd60e51b815260206004820152601260248201527f416c7265616479207265676973746572656400000000000000000000000000006044820152606401611372565b6001600160a01b038181166000818152601b602090815260409182902080546001600160a01b031916948716948517905590519182527f5d5df5e56200e3e6f92ac0067b9efa454a00ce9fc7109394e4a8722bd04701039101610e73565b60006001613001836002614288565b610d7091906142e6565b6000868152601360209081526040808320878452909152812060020154600110613060576006600052601d6020527fe05f340630215c2ef0683a72fde801183a1a4ecac14ded57e11c794e9bcb20695461308d565b6007600052601d6020527f0b2bb571a71764032d04342d0eb422bc5d6eeb3c436078b13e30f0762c04c504545b600088815260156020526040902054909150811161316a576000878152601060209081526040808320805460ff1916600190811790915560148352818420849055601383528184208a8552835292819020815160608101835281546001600160a01b03168152938101549284018390526002015490830152613110908990611442565b81516001600160a01b03166000908152601a602090815260408083208c8452600f8352818420600101548452909152812080549091906131519084906142a7565b909155506131639050888860016135bc565b50506135b4565b84861461343857851561328557856000887ff231a86816e29158d16d28756302ac7c8c04ffef2f5206456abe551907d5a00e86602001518760400151886060015189608001516040516131d6949392919093845260208401929092526040830152606082015260800190565b60405180910390a46000878152601360209081526040808320898452825291829020825160608101845281546001600160a01b03168152600182015492810183905260029091015492810192909252613230908990611442565b81516001600160a01b03166000908152601a602090815260408083208c8452600f8352818420600101548452909152812080549091906132719084906142a7565b909155506132839050888860016135bc565b505b846001887ff231a86816e29158d16d28756302ac7c8c04ffef2f5206456abe551907d5a00e86602001518760400151886060015189608001516040516132e4949392919093845260208401929092526040830152606082015260800190565b60405180910390a46000878152601360209081526040808320888452825291829020825160608101845281546001600160a01b0316815260018201549281018390526002909101549281019290925261333e908990611442565b81516001600160a01b03166000908152601a602090815260408083208c8452600f83528184206001015484529091528120805490919061337f908490614081565b909155506133919050888760006135bc565b60008881526015602052604081208054600192906133b09084906140c0565b90915550508051604080516001600160a01b03909216602083015281018990526060810184905260009060800160408051601f1981840301815291815281516020928301206000818152601e90935291205490915015158061342257506000818152601e602052604090206001015415155b15613435576134358183600001516137a4565b50505b848614801561344657508185145b1561350a576000878152601360209081526040808320888452825291829020825160608101845281546001600160a01b0316815260018201549281018390526002909101549281019290925261349d908990611442565b81516001600160a01b03166000908152601a602090815260408083208c8452600f835281842060010154845290915290819020919091558101516134e2908990611442565b90516001600160a01b03166000908152601a6020908152604080832060045484529091529020555b825184141561351957506135b4565b83600314801561352c5750826020015185145b8061354557508360041480156135455750826040015185145b156135b257846002887ff231a86816e29158d16d28756302ac7c8c04ffef2f5206456abe551907d5a00e86602001518760400151886060015189608001516040516135a9949392919093845260208401929092526040830152606082015260800190565b60405180910390a45b505b505050505050565b60006135c7846120f8565b6000858152601360209081526040808320878452825291829020825160608101845281546001600160a01b031681526001820154928101929092526002015491810182905291925061361990836142e6565b6000868152601760209081526040808320888452825280832089845260168352818420898552909252822092945091905b8254811015611e9e576040808501516000838152602085905291822054613672908890614288565b61367c9190614106565b9050861561370d5760008281526020849052604090205461369d90826140c0565b601a60008685815481106136c157634e487b7160e01b600052603260045260246000fd5b60009182526020808320909101546001600160a01b0316835282810193909352604091820181206004548252909252812080549091906137029084906142a7565b909155506137919050565b60008281526020849052604090205461372690826140c0565b601a600086858154811061374a57634e487b7160e01b600052603260045260246000fd5b60009182526020808320909101546001600160a01b03168352828101939093526040918201812060045482529092528120805490919061378b908490614081565b90915550505b508061379c8161435e565b91505061364a565b6000828152601e602052604090208054600190910154600e5482111561381f576000828152601d6020526040902054829061381d57600d80546001810182556000919091527fd7b6990105719101dabeb77144f2a3385c8033acd3af97e9423a695e81ad1eb50181905560095461381d90829086612e45565b505b6000918252601d6020526040909120555050565b82805461383f90614329565b90600052602060002090601f01602090048101928261386157600085556138a7565b82601f1061387a57805160ff19168380011785556138a7565b828001600101855582156138a7579182015b828111156138a757825182559160200191906001019061388c565b506138b39291506138f1565b5090565b8280548282559060005260206000209081019282156138a757916020028201828111156138a757825182559160200191906001019061388c565b5b808211156138b357600081556001016138f2565b80356001600160a01b038116811461391d57600080fd5b919050565b600082601f830112613932578081fd5b813560206139476139428361405d565b61402c565b80838252828201915082860187848660051b8901011115613966578586fd5b855b8581101561398457813584529284019290840190600101613968565b5090979650505050505050565b600082601f8301126139a1578081fd5b813567ffffffffffffffff8111156139bb576139bb6143bf565b6139ce601f8201601f191660200161402c565b8181528460208386010111156139e2578283fd5b816020850160208301379081016020019190915292915050565b600060408284031215613a0d578081fd5b6040516040810167ffffffffffffffff8282108183111715613a3157613a316143bf565b816040528293508435915080821115613a4957600080fd5b50613a5685828601613991565b825250602083013560208201525092915050565b600060a08284031215613a7b578081fd5b613a83614003565b9050613a8e82613906565b81526020820135602082015260408201356040820152606082013560608201526080820135608082015292915050565b600060208284031215613acf578081fd5b6111ab82613906565b60008060408385031215613aea578081fd5b613af383613906565b9150613b0160208401613906565b90509250929050565b60008060408385031215613b1c578182fd5b613b2583613906565b946020939093013593505050565b60006020808385031215613b45578182fd5b823567ffffffffffffffff811115613b5b578283fd5b8301601f81018513613b6b578283fd5b8035613b796139428261405d565b80828252848201915084840188868560051b8701011115613b98578687fd5b8694505b83851015613bba578035835260019490940193918501918501613b9c565b50979650505050505050565b60006020808385031215613bd8578182fd5b823567ffffffffffffffff80821115613bef578384fd5b818501915085601f830112613c02578384fd5b8135613c106139428261405d565b80828252858201915085850189878560051b8801011115613c2f578788fd5b875b84811015613c6857813586811115613c4757898afd5b613c558c8a838b01016139fc565b8552509287019290870190600101613c31565b50909998505050505050505050565b600060208284031215613c88578081fd5b813567ffffffffffffffff811115613c9e578182fd5b61120484828501613922565b60008060408385031215613cbc578182fd5b823567ffffffffffffffff811115613cd2578283fd5b613cde85828601613922565b95602094909401359450505050565b600060208284031215613cfe578081fd5b5035919050565b60008060408385031215613d17578182fd5b50508035926020909101359150565b60008060008060808587031215613d3b578182fd5b8435935060208501359250613d5260408601613906565b9396929550929360600135925050565b600080600060608486031215613d76578081fd5b505081359360208301359350604090920135919050565b600080600060e08486031215613da1578081fd5b83359250613db28560208601613a6a565b915060c08401358015158114613dc6578182fd5b809150509250925092565b600060208284031215613de2578081fd5b8135600b81106111ab578182fd5b600060208284031215613e01578081fd5b813567ffffffffffffffff811115613e17578182fd5b61120484828501613991565b600060208284031215613e34578081fd5b813567ffffffffffffffff811115613e4a578182fd5b611204848285016139fc565b600080600083850360e0811215613e6b578182fd5b843593506020850135925060a0603f1982011215613e87578182fd5b50613e90614003565b60408501358152606085013560208201526080850135604082015260a0850135606082015260c08501356080820152809150509250925092565b600080600060e08486031215613ede578081fd5b8335925060208401359150613ef68560408601613a6a565b90509250925092565b60008251613f118184602087016142fd565b9190910192915050565b6020808252825182820181905260009190848201906040850190845b81811015613f5357835183529284019291840191600101613f37565b50909695505050505050565b6020815260008251806020840152613f7e8160408501602087016142fd565b601f01601f19169190910160400192915050565b600060c082016001600160a01b0385511683526020808601518185015260408601516040850152606086015160608501526080860151608085015260c060a085015281855180845260e0860191508287019350845b8181101561398457845183529383019391830191600101613fe7565b60405160a0810167ffffffffffffffff81118282101715614026576140266143bf565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715614055576140556143bf565b604052919050565b600067ffffffffffffffff821115614077576140776143bf565b5060051b60200190565b6000808212826001600160ff1b03038413811516156140a2576140a2614393565b82600160ff1b0384128116156140ba576140ba614393565b50500190565b600082198211156140d3576140d3614393565b500190565b6000826140e7576140e76143a9565b600160ff1b82146000198414161561410157614101614393565b500590565b600082614115576141156143a9565b500490565b600181815b8085111561415557816000190482111561413b5761413b614393565b8085161561414857918102915b93841c939080029061411f565b509250929050565b60006111ab838360008261417357506001610d70565b8161418057506000610d70565b816001811461419657600281146141a0576141bc565b6001915050610d70565b60ff8411156141b1576141b1614393565b50506001821b610d70565b5060208310610133831016604e8410600b84101617156141df575081810a610d70565b6141e9838361411a565b80600019048211156141fd576141fd614393565b029392505050565b60006001600160ff1b038184138284138583048511828216161561422b5761422b614393565b600160ff1b8487128682058812818416161561424957614249614393565b85871292508782058712848416161561426457614264614393565b8785058712818416161561427a5761427a614393565b505050929093029392505050565b60008160001904831182151516156142a2576142a2614393565b500290565b600080831283600160ff1b018312811516156142c5576142c5614393565b836001600160ff1b030183138116156142e0576142e0614393565b50500390565b6000828210156142f8576142f8614393565b500390565b60005b83811015614318578181015183820152602001614300565b838111156124485750506000910152565b600181811c9082168061433d57607f821691505b60208210811415611ff657634e487b7160e01b600052602260045260246000fd5b600060001982141561437257614372614393565b5060010190565b6000600160ff1b82141561438f5761438f614393565b0390565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea26469706673582212202dc8828b20c0ee9d51fd3864da364b3aabee4547b2f7df470aac75dca1a18aba64736f6c63430008040033",
    "linkReferences": {},
    "deployedLinkReferences": {}
}

module.exports = compiled;

