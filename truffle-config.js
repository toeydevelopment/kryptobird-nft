var HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 8545, // Standard Ethereum port (default: none)
      network_id: "1337", // Any network (default: none)
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(
          "silly pipe ball face toast square umbrella butter about unit key own",
          "https://rinkeby.infura.io/v3/"
        );
      },
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
    },
  },

  contracts_directory: "./src/contracts/",
  contracts_build_directory: "./src/abis",

  compilers: {
    solc: {
      version: "^0.8.0",
      optimizer: {
        enabled: "true",
        runs: 200,
      },
    },
  },
};
