require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-etherscan');
require('dotenv').config();

const { POLYGON_MUMBAI_API_URL, PRIVATE_KEY, POLYGON_API_KEY } = process.env;

module.exports = {
  solidity: '0.8.4',
  networks: {
    mumbai: {
      url: POLYGON_MUMBAI_API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: POLYGON_API_KEY,
  },
};
