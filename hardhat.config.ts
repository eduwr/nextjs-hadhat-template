import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "solidity-coverage";
import "@typechain/hardhat";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [{ version: "0.8.5", settings: {} }],
  },
};

export default config;
