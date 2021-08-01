import { ethers } from "hardhat";

async function main() {
  const Sample = await ethers.getContractFactory("Sample");
  const sampleContract = await Sample.deploy("My Sample Contract");

  console.log("My Contract deployed to:", sampleContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
