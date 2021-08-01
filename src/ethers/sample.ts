import ether from "./ethers";
import contractJson from "../../artifacts/contracts/Sample.sol/Sample.json";
import { ethers } from "ethers";
import { Sample } from "../../typechain";

const CONTRACT_ADDRESS = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

export const sampleContract = new ethers.Contract(
  CONTRACT_ADDRESS,
  contractJson.abi,
  ether
) as Sample;
