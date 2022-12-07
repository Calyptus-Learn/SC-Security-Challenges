// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HeadOrTail {

  uint256 public wins;
  uint256 hash;
  uint256 FACTOR = 57896044618658097711785492504343953926634992334420282019728792003956564819968;

  function flip(bool _guess) public returns (bool) {
    uint256 blockValue = uint256(blockhash(block.number - 1));

    if (hash == blockValue) {
      revert();
    }

    hash = blockValue;
    uint256 coinFlip = blockValue / FACTOR;
    bool side = coinFlip == 1 ? true : false;

    if (side == _guess) {
      wins++;
      return true;
    } else {
      wins = 0;
      return false;
    }
  }
}