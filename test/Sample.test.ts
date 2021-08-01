import { expect } from "chai";
import { ethers } from "hardhat";
import { Contract } from "ethers";

describe("Sample", () => {
  let sample: Contract;
  const INITIAL_NAME = "My Sample Contract";

  before(async () => {
    const Sample = await ethers.getContractFactory("Sample");
    sample = await Sample.deploy(INITIAL_NAME);

    await sample.deployed();
  });

  it("should deploy the contract with initial name", async () => {
    expect(await sample.getName()).to.equal(INITIAL_NAME);
  });

  it("should change the name when requested", async () => {
    await sample.changeName("NEW NAME");

    const name = await sample.getName();
    expect(name).to.equal("NEW NAME");
  });
});