// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HillTop {

  address atTheTop;
  uint public prize;
  address public owner;

  constructor() payable {
    owner = msg.sender;  
    atTheTop = msg.sender;
    prize = msg.value;
  }

  receive() external payable {
    require(msg.value >= prize || msg.sender == owner);
    payable(atTheTop).transfer(msg.value);
    atTheTop = msg.sender;
    prize = msg.value;
  }

  function _king() public view returns (address) {
    return atTheTop;
  }
}