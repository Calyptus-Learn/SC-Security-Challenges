# Calyptus Smart Contract Security Challenge

Time to get your hands dirty!

In this section of the course, you get to use the smart contracts related skills you have acquired so far. This section has 10 challenges, and the difficulty of the challenges increases as you go further. Some challenges require you to steal the funds from the smart contracts, some want you to halt them using a DOS, some want you to blow the mind of the owner. The game has two persistent players, The Owner and the Attacker. You obviously are the Attacker and the Owner is your target. Some challenges may time to time include other actors as well.

Are you ready to give the owner a hard time?

## How to play

- Clone this repos.
- Build it on your local machine using `yarn install` in your terminal.
- Start Solving the challenges.

The `contracts` folder consists of the smart-contracts mentioned in each challenge. `test` folder consists of the setup scripts of each challenge. Pass the test to win the challenge.

Use ethers.js to code the steps of your hack into the `Exploit` section of the test script. The default "Exploit" section should look something like this:

```js
it("Exploit", async function () {
  /** CODE YOUR EXPLOIT HERE  */
});
```

Run this script from your terminal to run the test:

```bash
npx hardhat test <PATH_TO_THE_TEST>
```

Some challenges need you to deploy your own smart-contracts, Write those in the `contracts/YourAttackContracts` folder.

## Challenge 1

### Do Not Trust

The `Do Trust Lender` pool offers free flash-loans to everyone! Awesome right?

The pool has 1 million Calyptus Tokens(CPT) in balance. Complete the challenge by stealing all the CPTs from the pool and sending them into your account.

[Do Trust Lender Pool](contracts/DoNotTrust/DoTrustLender.sol)
[Tester Script](test/do-not-trust.js)
