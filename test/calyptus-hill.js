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

    expect(await this.headOrTale.bribe()).to.equal(INITIAL_BRIBE);
  });

  it("Exploit", async function () {
    /** CODE YOUR EXPLOIT HERE  */
    // const Attacker = await ethers.getContractFactory("BobsGuess", bob);
    // this.calyptusHill.connect(bob).
  });

  after(async function () {
    /** SUCCESS CONDITIONS */

    // Alice lends a small amount of ether from Bob

    // Bob is at the top once and for all
    if (expect(await this.calyptusHill.atTheTop()).to.equal(bob.address)) {
      console.log(`You have passed the ${challengeName}.`);
    }
  });
});
