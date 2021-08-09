import provider from "./ethers";
import contractJson from "../../artifacts/contracts/Sample.sol/Sample.json";
import { ethers } from "ethers";
import { Sample } from "../../typechain";

export const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

export const sampleContract = new ethers.Contract(
  CONTRACT_ADDRESS,
  contractJson.abi,
  provider
) as Sample;
