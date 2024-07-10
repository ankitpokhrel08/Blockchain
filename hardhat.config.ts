import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
// import { PRIVATE_KEY, PRIVATE_KEY2 } from "./keyconfig";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    holesky: {
      url: `https://endpoints.omniatech.io/v1/eth/holesky/public`,
      accounts: [
        "ba4ebca7189f0ff6689c20b5537f6a9fb05fb684a749a9f83ae0581f1978c653",
        "40798a361b9e7208dfa36c46b0ce9b21d79867e31f34b183cb07f61396f15fb5",
      ],
    },
  },
};

export default config;
