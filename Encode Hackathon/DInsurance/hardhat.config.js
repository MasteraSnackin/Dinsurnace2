// Import the Hardhat toolbox plugin
require("@nomicfoundation/hardhat-toolbox");

// Import and configure dotenv to load environment variables
require("dotenv").config();

// Destructure environment variables
const { PRIVATE_KEY, FLARE_RPC_URL, ETHERSCAN_API_KEY } = process.env;

// Export the Hardhat configuration
module.exports = {
  // Specify the Solidity version to use
  solidity: "0.8.20",

  // Configure networks for deployment
  networks: {
    // Configuration for the Flare network
    flare: {
      url: FLARE_RPC_URL,  // RPC URL for the Flare network
      accounts: [PRIVATE_KEY],  // Array of private keys for signing transactions
    },
  },

  // Configuration for Etherscan verification
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,  // API key for Etherscan verification
  },
};
