const { ethers } = require("hardhat");
const { expect } = require("chai");
const {
  anyValue,
  reverted,
} = require("@nomicfoundation/hardhat-chai-matchers/");

const challengeName = "Calyptus-Hill Challenge";

describe(challengeName, function () {
  let alice, bob;

  const INITIAL_BRIBE = ethers.utils.parseEther("1");

  before(async function () {
    /** SETUP SCENARIO - DON'T CHANGE ANYTHING HERE */
    [alice, bob] = await ethers.getSigners();
    const CalyptusHill = await ethers.getContractFactory("CalyptusHill", alice);

    this.calyptusHill = await CalyptusHill.deploy(alice.address, {
      value: INITIAL_BRIBE,
    });

    expect(await this.calyptusHill.bribe()).to.equal(INITIAL_BRIBE);
  });

  it("Exploit", async function () {
    /** CODE YOUR EXPLOIT HERE  */
  });

  after(async function () {
    /** SUCCESS CONDITIONS */

    // Alice tries to reclaim the ownership...
    var bribe = await this.calyptusHill.bribe();

    await expect(
      alice.sendTransaction({
        to: this.calyptusHill.address,
        value: bribe,
      })
    ).to.be.reverted;

    bribe = await this.calyptusHill.bribe();

    if (
      expect(await this.calyptusHill.atTheTop()).not.to.equal(alice.address)
    ) {
      console.log(`You have passed the ${challengeName}.`);
    }
  });
});
