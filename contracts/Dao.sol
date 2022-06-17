//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;


contract  CryptoDao {

    address public owner;
    uint256 nextProposal;
    uint256 [] public validTokens;
}