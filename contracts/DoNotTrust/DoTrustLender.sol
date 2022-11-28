// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

/**
 * @title DoTrustLender
 * @author Calyptus
 */
contract DoTrustLender is ReentrancyGuard {

    using Address for address;

    IERC20 public immutable calyptusToken;

    constructor (address tokenAddress) {
        calyptusToken = IERC20(tokenAddress);
    }

    function flashLoan(
        uint256 borrowAmount,
        address borrower,
        address target,
        bytes calldata data
    )
        external
        nonReentrant
    {
        uint256 balanceBefore = calyptusToken.balanceOf(address(this));
        require(balanceBefore >= borrowAmount, "Not enough tokens in pool");
        
        calyptusToken.transfer(borrower, borrowAmount);  
        target.functionCall(data);  
        // @audit-info this lets the caller of this function make this contract call anyone and access any function

        uint256 balanceAfter = calyptusToken.balanceOf(address(this));
        require(balanceAfter >= balanceBefore, "Flash loan hasn't been paid back");
    }

}
