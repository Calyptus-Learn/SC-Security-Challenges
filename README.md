<p align="center">
  <img src="https://calyptus.co/wp-content/uploads/logo.svg" width="300" title="Calyptus" >
</p>
<br />

# Calyptus Smart Contract Security Challenge



Time to get your hands dirty!

In this section of the course, you get to use the smart contracts related skills you have acquired so far. This section has 10 challenges, and the difficulty of the challenges increases as you go further.

The game has two characters, Alice and Bob. You help Bob who is trying to give Alice a hard time. Some challenges may time to time introduce other characters as well.

Some challenges require Bob to steal the funds from Alice's smart contracts, some want Bob to halt Alice's smart-contracts using a DOS and some want Bob to blow Alice's mind.

Are you ready to play the game?

## System Requirements

To use this repo you should have the following programmes installed in your machine:

- Node ^18.12.1 [installation guide](https://nodejs.dev/en/learn/how-to-install-nodejs/)
- Yarn Package Manager [installation guide](https://classic.yarnpkg.com/lang/en/docs/install)

## How to play

### Clone this repo, cd into it and install the dependencies by pasting the following code into your terminal:

```bash
git clone https://github.com/Calyptus-Learn/SC-Security-Challenges.git && cd SC-Security-Challenges && yarn install
```

### Start Solving the challenges

The `contracts` folder consists of the smart-contracts mentioned in each challenge. `test` folder consists of the setup scripts of each challenge. Pass the test to win the challenge.

Some challenges would need you to deploy your own smart-contracts, write those in the `contracts/BobsContracts` folder.

Use ethers.js to code the steps of your hack into the `Exploit` section of the test script. Use Bob's account to perform all the exploits by using [.connect(bob)](https://docs.ethers.io/v5/single-page/#/v5/api/contract/contract/-%23-Contract-connect) notation from ethers.js

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

### No Privacy (Vulnerability: Accessing Private Variables)

---

Alice has deployed a secret Lock on blockchain that opens with a password. Help Bob find out the password and unlock the lock to win this challenge.

**Check out the [No Privacy](contracts/NoPrivacy/AlicesLock.sol) smart-contract and find a way to unlock it.**

**Pass this [Test](test/no-privacy.js) to win the challenge.**

---

## Challenge 2

### Head or Tail (Vulnerablilty: Randomness through global variable)

---

Alice and Bob are flipping a coin to decide who is a better smart contract programer.

Help Bob win the coin flip 5 times in a row to win the challenge.

**Check out the [Head or Tail](contracts/HeadOrTale/HeadOrTail.sol) smart-contract and find a way to hack it.**

**Pass this [Test](test/head-or-tail.js) to win the challenge.**

---

## Challenge 3

### Mount Calyptus (Vulnerability: Denial of Service due to push pattern)

---

Everyone wants to be at the top of Mount Calyptus, but there's space for only one. As they say, everything can be bought with money, so can be the spot at the summit. Whoever sends the Mount Calyptus Smart Contract an amount of ether that is larger than the current bribe replaces the previous climber. On such an event, the replaced climber gets paid the new bribe, making a bit of ether in the process!

Alice wants to be at the top at all cost! Alice reclaims the top spot as soon as anyone claims it sending equal bribe.

Help Bob stop Alice from reclaiming the atTheTop position.

**Check out the [Calyptus Hill](contracts/CalyptusHill/CalyptusHill.sol) smart-contract and find a way to hack it.**

**Pass this [Test](test/calyptus-hill.js) to win the challenge.**

---

## Challenge 4

### Do Not Trust (Vulnerability: Insecure External Call)

---

Alice has deployed a `Do Trust Lender` pool that offers free flash-loans to everyone!

Awesome right?

The pool has 1 million Calyptus Tokens (CPT) in balance. Complete the challenge by making Bob steal all the CPTs from the pool and send them into the his account.

**Check out the [Do Trust Lender Pool](contracts/DoNotTrust/DoTrustLender.sol) smart-contract and find a way to hack it.**

**Pass this [Test](test/do-not-trust.js) to win the challenge.**

---

## Challenge 5

### Re-enter (Vulnerability: Reentrancy)

---

Alice has deployed a simple lending pool that allows its users to deposit ETH, and withdraw it at any point in time.

This simple lending pool already has 1000 ETH in balance, and is offering free flash loans using the deposited ETH.

Help Bob steal all the ETH from Alice's lending pool.

**Check out the [ReenterPool](contracts/Reenter/Reenter.sol) smart-contract and find a way to hack it.**

**Pass this [Test](test/reenter.js) to win the challenge.**

---

## More Levels Coming Soon

> Stuck at a level? We have provided the solution to all the tests along with respective smart contracts where ever needed in the solution branch. Checkout to the solution branch by typing the following in your terminal:

```bash
git checkout Solutions
```
