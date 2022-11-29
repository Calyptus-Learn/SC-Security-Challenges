const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("Reenter Challenge", function () {
  let alice, bob;

  const ETHER_IN_POOL = ethers.utils.parseEther("1000");

  before(async function () {
    /** SETUP SCENARIO - DON'T CHANGE ANYTHING HERE */
    [alice, bob] = await ethers.getSigners();

    const ReenterPoolFactory = await ethers.getContractFactory(
      "ReenterPool",
      alice
    );
    this.pool = await ReenterPoolFactory.deploy();

    await this.pool.deposit({ value: ETHER_IN_POOL });

    this.bobInitialEthBalance = await ethers.provider.getBalance(bob.address);

    expect(await ethers.provider.getBalance(this.pool.address)).to.equal(
      ETHER_IN_POOL
    );
  });

  it("Exploit", async function () {
    /** CODE YOUR EXPLOIT HERE */
  });

  after(async function () {
    /** SUCCESS CONDITIONS */
    if (
      expect(await ethers.provider.getBalance(this.pool.address)).to.be.equal(
        "0"
      ) &&
      expect(await ethers.provider.getBalance(bob.address)).to.be.gt(
        this.bobInitialEthBalance
      )
    ) {
      console.log("You have passed the Reenter Challenge");
    }

    // Not checking exactly how much is the final balance of bob,
    // because it'll depend on how much gas bob spends in the attack
    // If there were no gas costs, it would be balance before attack + ETHER_IN_POOL
  });
});
