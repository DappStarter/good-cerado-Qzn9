require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess kiwi suit food curve rice machine mistake coral light army gift'; 
let testAccounts = [
"0x139c7602d87d63fab0d392d5d623af5ffa62410db4352519746c35cc39534b98",
"0x9de675e51b3477c40aa7eca7f03be64bc6feff039a3702d3094f506e1f1133a3",
"0xad98a2c6dc05f2b2e36426d1345b3f1709c6cf08899d44aad1998d8025796d6d",
"0xd3ad8125369fd0e14c6b70af46fec902de66b0f63ee480dded5d198c49f96e1f",
"0x4113dbc407136f07ed3ff9656643de46d6be74f16d6842935ef2a5aa4832601b",
"0x835862046c62ac0bcf6d29370d79456a5db3303b89a9aebe948b3cb870dfda1d",
"0x6772d8fba701f370e80b2c5c4b156847a06bc44697f14258aed5311ec8e13913",
"0x3b7ff470cebd9a87f4c4c37edb543646743cbb279be93614d664496a3ecec6a3",
"0x04ee128855078f6d36eefcf9cb0cf3dccd7788f7804ebe4345a91ff0496bfbfc",
"0x7d86f9a8540369fd1b2b66fee1051ee27c97626dd79f193477486258d9ab0708"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

