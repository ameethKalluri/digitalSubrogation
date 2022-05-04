// var SimpleStorage = artifacts.require("./Policy.sol");

// module.exports = function(deployer) {
//   deployer.deploy(SimpleStorage);
// };
var user=artifacts.require("./User.sol");
var policy=artifacts.require("./Policy.sol");
var Adjuster=artifacts.require("./Adjuster.sol");
var Siu=artifacts.require("./Siu.sol");
var Tagency=artifacts.require("./Tagency.sol");
module.exports = async function(deployer) {
  deployer.deploy(policy);
  deployer.deploy(user);
  deployer.deploy(Adjuster);
  deployer.deploy(Siu);
  deployer.deploy(Tagency);
};
