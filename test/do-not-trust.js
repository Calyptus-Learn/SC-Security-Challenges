const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("[Challenge] Truster", function () {
  let owner, attacker;

  const TOKENS_IN_POOL = ethers.utils.parseEther("1000000");

  before(async function () {
    /** SETUP SCENARIO - NO NEED TO CHANGE ANYTHING HERE */
    [owner, attacker] = await ethers.getSigners();

    const CalyptusToken = await ethers.getContractFactory(
      "CalyptusToken",
      owner
    );
    const DoTrustLender = await ethers.getContractFactory(
      "DoTrustLender",
      owner
    );

    this.token = await CalyptusToken.deploy();
    this.pool = await DoTrustLender.deploy(this.token.address);

    await this.token.transfer(this.pool.address, TOKENS_IN_POOL);

    expect(await this.token.balanceOf(this.pool.address)).to.equal(
      TOKENS_IN_POOL
    );

    expect(await this.token.balanceOf(attacker.address)).to.equal("0");
  });

  it("Exploit", async function () {
    /** CODE YOUR EXPLOIT HERE  */
    const DoNotTrustAttackerFactory = await ethers.getContractFactory(
      "DoNotTrustAttacker",
      owner
    );
    this.exploit = await DoNotTrustAttackerFactory.deploy();
    await this.exploit
      .connect(attacker)
      .attack(this.pool.address, this.token.address);
  });

  after(async function () {
    /** SUCCESS CONDITIONS */

    // Attacker has taken all tokens from the pool
    expect(await this.token.balanceOf(attacker.address)).to.equal(
      TOKENS_IN_POOL
    );
    expect(await this.token.balanceOf(this.pool.address)).to.equal("0");
  });
});
