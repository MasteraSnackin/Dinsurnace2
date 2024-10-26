import { ethers } from "hardhat";
import "@nomicfoundation/hardhat-verify";
import "dotenv/config";

// URL for the verifier server that prepares attestation data
const VERIFIER_SERVER_URL = "http://localhost:3000/IJsonApi/prepareResponse";
// API key for OpenWeatherMap, stored in .env file
const { OPEN_WEATHER_API_KEY } = process.env;

// Function to fetch attestation data from the verifier server
async function getAttestationData(timestamp: number): Promise<any> {
  // Send a POST request to the verifier server
  const response = await fetch(VERIFIER_SERVER_URL, {
    method: "POST",
    headers: { "X-API-KEY": "12345", "Content-Type": "application/json" },
    body: JSON.stringify({
      "attestationType": "0x4a736f6e41706900000000000000000000000000000000000000000000000000",
      "sourceId": "0x5745423200000000000000000000000000000000000000000000000000000000",
      "messageIntegrityCode": "0x0000000000000000000000000000000000000000000000000000000000000000",
      "requestBody": {
        "url": `https://api.openweathermap.org/data/3.0/onecall/timemachine?lat=39.099724&lon=-94.578331&dt=${timestamp}&appid=${OPEN_WEATHER_API_KEY}`,
        "postprocessJq": "{latitude:(.lat*pow(10;6)),longitude:(.lon*pow(10;6)),temperature:(.data[0].temp*pow(10;6)),wind_speed:(.data[0].wind_speed*pow(10;6)),wind_deg:.data[0].wind_deg,timestamp:.data[0].dt,description:[.data[0].weather[].description]}",
        "abi_signature": "{\"struct Weather\":{\"latitude\":\"int256\",\"longitude\":\"int256\",\"temperature\":\"uint256\",\"wind_speed\":\"uint256\",\"wind_deg\":\"uint256\",\"timestamp\":\"uint256\",\"description\":\"string[]\"}}"
      }
    })
  });
  
  // Check if the response is successful
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  // Parse and return the JSON response
  return await response.json();
}

async function main() {
  // Get the contract factory for ParametricInsurance
  const ParametricInsurance = await ethers.getContractFactory("ParametricInsurance");
  
  // Deploy the contract
  console.log("Deploying ParametricInsurance...");
  const parametricInsurance = await ParametricInsurance.deploy();
  
  // Wait for the contract to be deployed
  await parametricInsurance.waitForDeployment();
  
  // Get the deployed contract address
  const contractAddress = await parametricInsurance.getAddress();
  console.log("ParametricInsurance deployed to:", contractAddress);

  // Get the deployer's address
  const [deployer] = await ethers.getSigners();
  
  // Set up policy details
  const premium = ethers.parseEther("0.1");  // 0.1 ETH
  const coverageAmount = ethers.parseEther("1");  // 1 ETH
  
  // Purchase a policy
  console.log("Purchasing policy...");
  const purchaseTx = await parametricInsurance.purchasePolicy(coverageAmount, { value: premium });
  await purchaseTx.wait();
  console.log("Policy purchased for:", deployer.address);

  // Get current timestamp
  const timestamp = Math.floor(Date.now() / 1000);
  
  // Fetch attestation data
  console.log("Fetching attestation data...");
  const attestationData = await getAttestationData(timestamp);
  
  // Add weather data to the contract
  console.log("Adding weather data...");
  const weatherTx = await parametricInsurance.addWeatherData(attestationData.response);
  await weatherTx.wait();
  console.log("Weather data added");

  // Verify the contract on Etherscan if API key is available
  if (process.env.ETHERSCAN_API_KEY) {
    console.log("Verifying contract on Etherscan...");
    try {
      await run("verify:verify", {
        address: contractAddress,
        constructorArguments: [],
      });
      console.log("Contract verified on Etherscan");
    } catch (e: any) {
      console.log("Verification failed:", e.message);
    }
  } else {
    console.log("Skipping Etherscan verification due to missing API key");
  }
}

// Execute the main function
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Deployment failed:", error);
    process.exit(1);
  });
