const MANACrowdsale = artifacts.require("./MANACrowdsale.sol");

module.exports = function(deployer) {
  deployer.deploy(MANACrowdsale, 20, 1000000, 1, 1, 1, "0x6Be02d1d3665660d22FF9624b7BE0551ee1Ac91b", { gas: 4294967295 });
};
