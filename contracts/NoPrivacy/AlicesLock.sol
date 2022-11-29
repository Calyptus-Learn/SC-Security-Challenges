// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AlicesLock {
  bool private locked;
  bytes32 password;

  constructor(bytes32 _password) {
    locked = true;
    password = _password;
  }

  function ifLocked() public view returns(bool){
    return locked;
  }

  function unlock(bytes32 _password) public {
    if ( password == _password) {
      locked = false;
    }
  }
}