require("@nomiclabs/hardhat-waffle");
const dotenv = require("dotenv");

dotenv.config();

const mnemonic = process.env.MNEMONIC.trim();
const alchemyKey = process.env.ALCHEMY_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${alchemyKey}`,
      accounts: {
        mnemonic
      }
    }
  }
};
