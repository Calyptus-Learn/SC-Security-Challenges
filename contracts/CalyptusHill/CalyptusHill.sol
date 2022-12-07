// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CalyptusHill {

  address atTheTop;
  uint public bribe;
  address public owner;

  constructor() payable {
    owner = msg.sender;  
    atTheTop = msg.sender;
    bribe = msg.value;
  }

  receive() external payable {
    require(msg.value >= bribe || msg.sender == owner);
    payable(atTheTop).transfer(msg.value);
    atTheTop = msg.sender;
    bribe = msg.value;
  }

  function top() public view returns (address) {
    return atTheTop;
  }
}