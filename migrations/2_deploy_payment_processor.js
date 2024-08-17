const PaymentProcessor = artifacts.require("PaymentProcessor");

module.exports = function (deployer) {
    deployer.deploy(PaymentProcessor);
};
