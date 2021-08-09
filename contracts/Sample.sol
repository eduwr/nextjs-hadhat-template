// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

contract Sample {
    string public contractName;
    address payable public owner;
    uint public etherReceived;

    constructor(string memory _name) {
        contractName = _name;
        owner = payable(address(msg.sender));
        etherReceived = 0;
    }

    function getOwnerAddress() public view returns (address) {
        return owner;
    }


    function changeName(string memory _name) public {
        contractName = _name;
    }

    function sendMeEthers() external payable {
        bool sent = owner.send(msg.value);
        etherReceived = msg.value + etherReceived;
        require(sent, "Failed to send Ether");
    }

    function showName() public view returns (string memory) {
        return contractName;
    }

    function showEtherReceived() public view returns (uint) {
        return etherReceived;
    }

    function showOwnerAddress() public view returns (address) {
        return address(owner);
    }
}
