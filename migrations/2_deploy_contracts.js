// var SimpleStorage = artifacts.require("./Policy.sol");

// module.exports = function(deployer) {
//   deployer.deploy(SimpleStorage);
// };
var user=artifacts.require("./User.sol");
var policy=artifacts.require("./Policy.sol");
var Adjuster=artifacts.require("./Adjuster.sol");

module.exports = async function(deployer) {
  deployer.deploy(policy);
  deployer.deploy(user);
  deployer.deploy(Adjuster);
};
