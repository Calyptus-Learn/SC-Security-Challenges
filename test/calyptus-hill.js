const { ethers } = require("hardhat");
const { expect } = require("chai");
const challengeName = "Calyptus-Hill Challenge";

describe(challengeName, function () {
  let deployer, alice, bob;

  const INITIAL_BRIBE = ethers.utils.parseEther("1");

  before(async function () {
    /** SETUP SCENARIO - DON'T CHANGE ANYTHING HERE */
    [deployer, alice, bob] = await ethers.getSigners();
    const CalyptusHill = await ethers.getContractFactory(
      "CalyptusHill",
      deployer
    );

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

    // Alice tries to reclaim the ownership
    const newValue = await this.calyptusHill.bribe();

    await alice.sendTransaction({
      to: this.calyptusHill.address,
      value: newValue.add("1"),
    });

    // Is Bob at the top once and for all?
    if (expect(await this.calyptusHill.atTheTop()).to.equal(bob.address)) {
      console.log(`You have passed the ${challengeName}.`);
    }
  });
});
