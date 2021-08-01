import * as chai from "chai";
import { ethers } from "hardhat";
import { solidity } from "ethereum-waffle";

import { Sample } from "../typechain/Sample";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

chai.use(solidity);
const { expect, assert } = chai;
describe("Sample", () => {
  let sample: Sample;
  let owner: SignerWithAddress;
  let sender: SignerWithAddress;
  const INITIAL_NAME = "My Sample Contract";

  beforeEach(async () => {
    [owner, sender] = await ethers.getSigners();
    const Sample = await ethers.getContractFactory("Sample");
    sample = await Sample.deploy(INITIAL_NAME);

    await sample.deployed();
  });

  it("should deploy the contract with initial name", async () => {
    expect(await sample.contractName()).to.equal(INITIAL_NAME);
  });

  it("should change the name when requested", async () => {
    await sample.changeName("NEW NAME");

    const name = await sample.contractName();
    expect(name).to.equal("NEW NAME");
  });

  it("should return the owner address", async () => {
    const contractOwner = await sample.owner();

    expect(contractOwner).to.equal(owner.address);
  });

  it("should send ether to the owner", async () => {
    const initialOwnerBalance = parseFloat(
      ethers.utils.formatEther(await owner.getBalance())
    );

    const initialSenderBalance = parseFloat(
      ethers.utils.formatEther(await sender.getBalance())
    );

    const value = ethers.utils.parseEther("1.0");
    await sample.connect(sender).sendMeEthers({
      value,
    });

    const difference = 0.98;
    const minimumOwnerFinalValue = initialOwnerBalance + difference;
    const maximumSenderFinalValue = initialSenderBalance - difference;

    const ownerFinalValue = parseFloat(
      ethers.utils.formatEther(await owner.getBalance())
    );

    const senderFinalValue = parseFloat(
      ethers.utils.formatEther(await sender.getBalance())
    );

    expect(ownerFinalValue).to.be.greaterThan(minimumOwnerFinalValue);
    expect(senderFinalValue).to.be.lessThan(maximumSenderFinalValue);
  });

  it("ether send should start with zero", async () => {
    const received = ethers.utils.formatEther(await sample.etherReceived());

    assert.notStrictEqual(received, "0");
  });

  it("ether send should be counted", async () => {
    const value = ethers.utils.parseEther("2.5");

    await sample.connect(sender).sendMeEthers({
      value,
    });

    const received = await sample.etherReceived();
    assert.strictEqual(received, value);
  });
});
