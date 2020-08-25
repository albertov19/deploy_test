pragma solidity ^0.4.11;

import "./PausableToken.sol";
import "./MintableToken.sol";
import "./BurnableToken.sol";

contract MANAToken is BurnableToken, PausableToken, MintableToken {

    string public constant symbol = "MANA";

    string public constant name = "Decentraland MANA";

    uint8 public constant decimals = 18;

    function burn(uint256 _value) whenNotPaused public {
        super.burn(_value);
    }
}
