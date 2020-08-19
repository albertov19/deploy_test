require('babel-register');
require('babel-polyfill');

const PrivateKeyProvider = require ('./private-provider')
var privateKey = "99B3C12287537E38C90A9219D4CB074A89A16E9CDB20BF85728EBD97C343E342";

module.exports = {
  networks: {
    development: {
      provider: () => new PrivateKeyProvider(privateKey, "http://localhost:9933/", 43),
      network_id: "43"
    },
    live: {
      provider: () => new PrivateKeyProvider(privateKey, "http://35.203.125.209:9933/", 43),
      network_id: 43
    },
    ganache: {
      provider: () => new PrivateKeyProvider(privateKey, "http://localhost:8545/", 43),
      network_id: 43
    }
  },
  compilers: {
     solc: {
       version: "^0.4.25"  // ex:  "0.4.20". (Default: Truffle's installed solc)
     }
  }
};
