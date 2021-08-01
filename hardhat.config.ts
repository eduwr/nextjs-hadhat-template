import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "solidity-coverage";

const config: HardhatUserConfig = {
  solidity: "0.8.5",
};

export default config;
