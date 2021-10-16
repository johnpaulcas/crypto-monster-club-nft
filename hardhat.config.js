require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config();

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.0",
  paths: {
    artifacts: './sample/src/artifacts'
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/Yt7SwaEBlKVfnkBc9XFzIuwyBZUUrfON",
    },
  },
  etherscan: {
    apiKey: process.env.API_ETHERSCAN_KEY_LIVE
  }
};
