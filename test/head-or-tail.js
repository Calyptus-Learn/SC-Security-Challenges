const { ethers } = require("hardhat");
const { expect } = require("chai");
const challengeName = "Head or Tail Challenge";

describe(challengeName, function () {
  let alice, bob;

  before(async function () {
    /** SETUP SCENARIO - DON'T CHANGE ANYTHING HERE */
    [alice, bob] = await ethers.getSigners();

    const HeadOrTale = await ethers.getContractFactory("HeadOrTail", alice);

    this.headOrTale = await HeadOrTale.deploy();

    expect(await this.headOrTale.wins()).to.equal(0);
  });

  it("Exploit", async function () {
    /** CODE YOUR EXPLOIT HERE  */
  });

  after(async function () {
    /** SUCCESS CONDITIONS */

    // Bob has won 5 times in a row
    if (expect(await this.headOrTale.wins()).to.equal(5)) {
      console.log(`You have passed the ${challengeName}.`);
    }
  });
});
