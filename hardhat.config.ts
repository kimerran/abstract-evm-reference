require('dotenv').config()
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@matterlabs/hardhat-zksync";

const { DEFAULT_PRIVATE_KEY } = process.env

const config: HardhatUserConfig = {
  zksolc: {
    version: "latest",
    settings: {
      // Note: This must be true to call NonceHolder & ContractDeployer system contracts
      enableEraVMExtensions: false,
    },
  },
  defaultNetwork: "abstractTestnet",
  networks: {
    abstractTestnet: {
      accounts: [ DEFAULT_PRIVATE_KEY || '' ],
      url: "https://api.testnet.abs.xyz",
      ethNetwork: "sepolia",
      zksync: true,
      verifyURL:
        "https://api-explorer-verify.testnet.abs.xyz/contract_verification",
    },
  },
  solidity: {
    version: "0.8.24",
  },
};

export default config;
