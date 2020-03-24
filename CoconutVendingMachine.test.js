const CoconutVendingMachine = require("./CoconutVendingMachine");

describe("Coconut Vending Machine", () => {
  it("should return the price of the original orange juice", () => {
    const CoconutVendingMachine1 = new CoconutVendingMachine();
    expect(CoconutVendingMachine1.orangeJuicePrice).toEqual(200);
  });
});
