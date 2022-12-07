// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CalyptusHill {

  address public atTheTop;
  uint public bribe;
  address public owner;

  constructor(address _atTheTop) payable {
    owner = msg.sender;  
    atTheTop = _atTheTop;
    bribe = msg.value;
  }

  receive() external payable {
    require(msg.value >= bribe || msg.sender == owner);
    payable(atTheTop).transfer(msg.value);
    atTheTop = msg.sender;
    bribe = msg.value;
  }

}