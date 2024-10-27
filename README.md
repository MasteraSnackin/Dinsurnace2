# Parametric Insurance dApp

This project is a decentralized application (dApp) for parametric insurance using the Flare Network.

Demo of Working FrontEnd 
https://mythic-narrative-weaver-29-insurance-13.gptengineer.run/
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# Parametric Insurance dApp aka 

This project is a decentralized application (dApp) for parametric insurance using Ethereum, Solidity, and React. The application allows users to purchase insurance policies based on predefined weather conditions and automatically processes payouts when those conditions are met.

## Features

- **Purchase Policies**: Users can purchase insurance policies by paying a premium.
- **Automated Payouts**: Payouts are triggered automatically based on weather data fetched from an oracle.
- **Blockchain Technology**: Uses Ethereum blockchain and smart contracts for secure and transparent transactions.

## Technologies Used

- **Ethereum**: For decentralized transaction processing.
- **Solidity**: Smart contract programming language.
- **React**: Frontend library for building user interfaces.
- **Web3.js**: JavaScript library for interacting with the Ethereum blockchain.
- **Truffle**: Development environment and testing framework for Ethereum.

IMAGE 1[Complied Successfully](https://1drv.ms/i/s!At64SwKetw4ipacEGLXwQlhMs2hd7g?e=Aqgn0d)
IMAGE 2([BlockSeneseOracle)](https://1drv.ms/i/s!At64SwKetw4ipacB5gnmPbtSiS896w?e=S64Akt)
IMAGE 3 [Compiling Contracts](https://1drv.ms/i/s!At64SwKetw4ipacGVTRdMLR6CcuWGQ?e=bRhsX5) 
IMAGE 4 [Sucessful Output Contract Created](https://1drv.ms/i/s!At64SwKetw4ipacA2GwB4s7xq_y57A?e=sNVKHU)
IMAGE 5 [Truffle Project](https://1drv.ms/i/s!At64SwKetw4ipacFWI3lGvF0ms1D9g?e=Va7a9d)

Front End Video
https://1drv.ms/v/s!At64SwKetw4ipacZtmEYlemyizsd8A?e=n8Xrhy

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Offers a blockchain-based parametric insurance platform to help farmers mitigate weather-related risks with automated, transparent payouts using oracle data.

Our project is a decentralized application (dApp) designed to provide parametric insurance solutions on the Ethereum blockchain. It aims to mitigate the financial risks associated with adverse weather conditions, specifically for farmers, by leveraging blockchain technology and real-time data from oracles.

Image 1[High level Diagram](https://1drv.ms/i/s!At64SwKetw4ipacbTjYXqru7xlmA2Q?e=go7xYP)
Image 2[Flow Diagram](https://1drv.ms/i/s!At64SwKetw4ipacdpUfFh1G6LYpGfQ?e=bXAZSJ)

Key Features:
Automated Insurance Payouts: The dApp automatically triggers payouts based on predefined weather conditions, such as excess rainfall or drought, providing a seamless and efficient claims process.

Transparency and Security: By utilizing Ethereum's blockchain, all transactions and contract terms are immutable and transparent, ensuring trust and reliability for policyholders.

Oracle Integration: The solution integrates with Blocksense oracles to fetch real-time weather data, ensuring that insurance triggers are based on accurate and timely information.

User-Friendly Interface: The platform includes a simple and intuitive frontend built with React, allowing users to easily purchase policies and track their insurance status.

Problem Solved:
Farmers often face significant financial challenges due to unpredictable weather conditions, which can impact crop yields and income stability. Traditional insurance solutions are often slow and bureaucratic, leading to delays in claims processing. Our dApp addresses these issues by offering a streamlined, automated insurance process that reduces administrative overhead and speeds up payouts.

Use of Ethereum Blockchain:
The Ethereum blockchain is central to our solution, providing the infrastructure for deploying and executing smart contracts that handle insurance policies and payouts. The decentralized nature of Ethereum ensures that the system is not controlled by any single entity, enhancing security and trust. Additionally, smart contracts eliminate the need for intermediaries, reducing costs and increasing efficiency.

How It Works:
Policy Purchase: Users connect their Ethereum wallet (e.g., MetaMask) to the dApp and purchase an insurance policy by paying a premium in Ether.

Data Integration: The dApp requests weather data from the Blocksense oracle, which retrieves information from reliable external sources.

Payout Trigger: If the weather data meets or exceeds the predefined conditions, the smart contract automatically triggers payouts to the policyholders, sending Ether directly to their wallets.

By harnessing the power of blockchain and oracle technology, our parametric insurance dApp offers a revolutionary approach to managing agricultural risk, providing farmers with a reliable and efficient financial safety net.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


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
   No Longer need ETHERSCAN_API_KEY
   
   # This sets up environment variables for secure and configurable deployment

5. Compile the contract:
   ```
   npx hardhat compile
   ```
   # This compiles the Solidity smart contract

6. Deploy the contract:
   ```
   npx hardhat run scripts/deployParametricInsurance.ts --network flare
   ```
   # This deploys the compiled contract to the Flare network

7. Copy the deployed contract address and update it in `src/App.tsx`
   # This step is crucial for the frontend to interact with the deployed contract

8. Generate the ABI and place it in `src/ParametricInsuranceABI.json`
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
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Project Structure
bash
```bash
DInsuranceversion4/
├── .env
├── .gitignore
├── artifacts/
├── cache/
├── contracts/
│   ├── ParametricInsurance.sol
│   ├── ParamtricInsurnce.sol
├── hardhat.config.js
├── node_modules/
├── package.json
├── README.md
├── scripts/
│   ├── deployParametricInsurance.ts
│   ├── generateABI.js
├── src/
│   ├── App.tsx
│   ├── config.ts
│   ├── index.tsx
│   ├── ParamtricInsurancABI.json/
│   ├── types.d.ts
├── test/
│   ├── ParametricInsurance.test.ts
├── tsconfig.json


```
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Contributors
- [Umair Ismati](https://github.com/Rappid-exe)
- [Anis Bentahar](https://github.com/anistayebM)
- [Freya Wu](https://github.com/YanniWu88)

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## License

This project is licensed under the MIT License.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Acknowledgments 
https://github.com/MasteraSnackin/weather-surety-solutions

https://github.com/flare-foundation/JsonJqVerifierServer

https://github.com/flare-foundation/flare-hardhat-starter/blob/encode-hackathon/contracts/web2WeatherInteractor.sol

