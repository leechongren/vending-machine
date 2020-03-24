const VendingMachine = require("./VendingMachine");

class CoconutVendingMachine extends VendingMachine {
  constructor() {
    super();
    this.coconutWaterPrice = 350;
    this.menu = {
      OJ: this.orangeJuicePrice,
      CW: this.coconutWaterPrice
    };
  }

  checkChoice(choice) {}
}

module.exports = CoconutVendingMachine;
