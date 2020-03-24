const VendingMachine = require("./VendingMachine");

class CoconutVendingMachine extends VendingMachine {
  constructor() {
    super();
    this.coconutWaterPrice = 350;
  }
}

module.exports = CoconutVendingMachine;
