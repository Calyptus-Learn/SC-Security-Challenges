# Calyptus Smart Contract Security Challenge

Time to get your hands dirty!

In this section of the course, you get to use the smart contracts related skills you have acquired so far. This section has 10 challenges, and the difficulty of the challenges increases as you go further.

Some challenges require you to steal the funds from the smart contracts, some want you to halt them using a DOS and some want you to blow the mind of the owner of the smart-contract.

The game has two persistent players, The Owner and the Attacker. You obviously are the Attacker and the Owner is your target. Some challenges may time to time include other actors as well.

Are you ready to give the owner a hard time?

## System Requirements

To use this repo you should have the following programmes installed in your machine:

- Node ^18.12.1 [installation guide](https://nodejs.dev/en/learn/how-to-install-nodejs/)
- Yarn Package Manager [installation guide](https://classic.yarnpkg.com/lang/en/docs/install)

## How to play

- Clone this repo, cd into it and install the dependencies by pasting the following code into your terminal:

  ```bash
  git clone https://github.com/nizhunt/Calyptus-CTF.git && cd Calyptus-CTF && yarn install
  ```

- Start Solving the challenges

The `contracts` folder consists of the smart-contracts mentioned in each challenge. `test` folder consists of the setup scripts of each challenge. Pass the test to win the challenge.

Some challenges would need you to deploy your own smart-contracts, write those in the `contracts/YourAttackContracts` folder.

Use ethers.js to code the steps of your hack into the `Exploit` section of the test script. Use the `attacker` account to perform all the exploits by using [.connect(attacker)](https://docs.ethers.io/v5/single-page/#/v5/api/contract/contract/-%23-Contract-connect) notation from ethers.js

The default "Exploit" section of all the test files look like this:

```js
it("Exploit", async function () {
  /** CODE YOUR EXPLOIT HERE  */
});
```

After writing your exploit, run this script from your terminal:

```bash
npx hardhat test <PATH_TO_THE_TEST>
```

---

## Challenge 1

### Do Not Trust

---

The `Do Trust Lender` pool offers free flash-loans to everyone! Awesome right?

The pool has 1 million Calyptus Tokens (CPT) in balance. Complete the challenge by stealing all the CPTs from the pool and sending them into the attacker's account.

**Check out the [Do Trust Lender Pool](contracts/DoNotTrust/DoTrustLender.sol) smart-contract and find a way to hack it.**

**Pass this [Test](test/do-not-trust.js) to win the challenge.**

---

## Challenge 2

### Re-enter

---

**Check out the [ReenterPool](contracts/Reenter/Reenter.sol) smart-contract and find a way to hack it.**

**Pass this [Test](test/reenter.js) to win the challenge.**

---
