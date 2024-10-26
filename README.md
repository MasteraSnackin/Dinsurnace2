# Parametric Insurance dApp

This project is a decentralized application (dApp) for parametric insurance using the Flare Network.

Demo of Working FrontEnd 
https://mythic-narrative-weaver-29-insurance-13.gptengineer.run/
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

IMAGE 1[Complied Successfully](https://1drv.ms/i/s!At64SwKetw4ipacEGLXwQlhMs2hd7g?e=Aqgn0d)
IMAGE 2([BlockSeneseOracle)](https://1drv.ms/i/s!At64SwKetw4ipacB5gnmPbtSiS896w?e=S64Akt)
IMAGE 3 [Compiling Contracts](https://1drv.ms/i/s!At64SwKetw4ipacGVTRdMLR6CcuWGQ?e=bRhsX5) 
IMAGE 4 [Sucessful Output Contract Created](https://1drv.ms/i/s!At64SwKetw4ipacA2GwB4s7xq_y57A?e=sNVKHU)
IMAGE 5 [Truffle Project](https://1drv.ms/i/s!At64SwKetw4ipacFWI3lGvF0ms1D9g?e=Va7a9d)

Front End Video
https://1drv.ms/v/s!At64SwKetw4ipacZtmEYlemyizsd8A?e=n8Xrhy

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
