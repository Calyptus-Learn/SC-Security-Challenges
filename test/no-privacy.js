const { ethers } = require("hardhat");
const { expect } = require("chai");
require("dotenv").config();

describe("No Privacy Challenge", function () {
  let alice, bob;

  before(async function () {
    /** SETUP SCENARIO - DON'T CHANGE ANYTHING HERE */
    [alice, bob] = await ethers.getSigners();
    const NoPrivacyFactory = await ethers.getContractFactory(
      "AlicesLock",
      alice
    );
    this.lock = await NoPrivacyFactory.deploy(process.env.PASSWORD);
    // Peaking into the env is considered cheating!
  });

  it("Exploit", async function () {
    /** CODE YOUR EXPLOIT HERE  */
  });

  after(async function () {
    /** SUCCESS CONDITIONS */

    // Bob has unlocked the contract
    if (expect(await this.lock.ifLocked()).to.equal(false)) {
      console.log(`You have passed the No Privacy Challenge.`);
    }
  });
});
