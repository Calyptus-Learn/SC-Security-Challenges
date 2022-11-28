const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("[Challenge] Reenter", function () {
  let owner, attacker;

  const ETHER_IN_POOL = ethers.utils.parseEther("1000");

  before(async function () {
    /** SETUP SCENARIO - NO NEED TO CHANGE ANYTHING HERE */
    [owner, attacker] = await ethers.getSigners();

    const ReenterPoolFactory = await ethers.getContractFactory(
      "ReenterPool",
      owner
    );
    this.pool = await ReenterPoolFactory.deploy();

    await this.pool.deposit({ value: ETHER_IN_POOL });

    this.attackerInitialEthBalance = await ethers.provider.getBalance(
      attacker.address
    );

    expect(await ethers.provider.getBalance(this.pool.address)).to.equal(
      ETHER_IN_POOL
    );
  });

  it("Exploit", async function () {
    /** CODE YOUR EXPLOIT HERE */
    const AttackerFactory = await ethers.getContractFactory(
      "ReenterAttacker",
      owner
    );
    this.attackerContract = await AttackerFactory.deploy(this.pool.address);
    this.attackerContract.connect(attacker).attack();
  });

  after(async function () {
    /** SUCCESS CONDITIONS */
    expect(await ethers.provider.getBalance(this.pool.address)).to.be.equal(
      "0"
    );

    // Not checking exactly how much is the final balance of the attacker,
    // because it'll depend on how much gas the attacker spends in the attack
    // If there were no gas costs, it would be balance before attack + ETHER_IN_POOL
    expect(await ethers.provider.getBalance(attacker.address)).to.be.gt(
      this.attackerInitialEthBalance
    );
  });
});
