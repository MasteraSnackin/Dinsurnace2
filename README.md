# Parametric Insurance dApp

This project is a decentralized application (dApp) for parametric insurance using the Flare Network.

## Prerequisites

- Node.js (v14 or later)  # Required runtime environment
- npm  # Package manager for Node.js
- MetaMask browser extension  # For interacting with the Ethereum blockchain

## Setup

1. Clone the repository:
   ```
   git clone https://github.com/your-username/parametric-insurance-dapp.git
   cd parametric-insurance-dapp
   ```
   # This clones the project and navigates into the project directory

2. Install dependencies:
   ```
   npm install
   ```
   # This installs all the necessary packages defined in package.json

3. Create a `.env` file in the root directory with the following content:
   ```
   PRIVATE_KEY=your_private_key_here
   FLARE_RPC_URL=https://flare-api.flare.network/ext/C/rpc
   ETHERSCAN_API_KEY=your_etherscan_api_key_here
   OPEN_WEATHER_API_KEY=your_openweather_api_key_here
   ```
   # This sets up environment variables for secure and configurable deployment

4. Compile the contract:
   ```
   npx hardhat compile
   ```
   # This compiles the Solidity smart contract

5. Deploy the contract:
   ```
   npx hardhat run scripts/deployParametricInsurance.ts --network flare
   ```
   # This deploys the compiled contract to the Flare network

6. Copy the deployed contract address and update it in `src/App.tsx`
   # This step is crucial for the frontend to interact with the deployed contract

7. Generate the ABI and place it in `src/ParametricInsuranceABI.json`
   # The ABI is necessary for the frontend to know how to interact with the contract

## Running the application

1. Start the React app:
   ```
   npm start
   ```
   # This starts the development server for the React frontend

2. Ensure you have MetaMask installed and connected to the Flare network
   # MetaMask is used to interact with the blockchain from the browser

3. Interact with the dApp through your web browser
   # The user can now use the dApp to purchase insurance policies, etc.

## Testing

Run tests with:
