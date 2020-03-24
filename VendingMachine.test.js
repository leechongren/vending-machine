const VendingMachine = require("./VendingMachine");

describe("Vending Machine", () => {
  test("sumInput method should return the sum of all elements in an array", () => {
    const OJVendingMachine = new VendingMachine();
    expect(OJVendingMachine.sumInput([])).toEqual(0);
    expect(OJVendingMachine.sumInput([100])).toEqual(100);
    expect(OJVendingMachine.sumInput([10, 50, 100])).toEqual(160);
  });

  test("checkSufficientmoney method should return [OJ] if have enough total money and [] if not", () => {
    const OJVendingMachine = new VendingMachine();
    expect(OJVendingMachine.checkSufficientMoney(0)).toEqual([]);
    expect(OJVendingMachine.checkSufficientMoney(190)).toEqual([]);
    expect(OJVendingMachine.checkSufficientMoney(200)).toEqual(["OJ"]);
    expect(OJVendingMachine.checkSufficientMoney(210)).toEqual(["OJ"]);
  });

  test("dispenseChange method should return correct change for money less than price of orange juice", () => {
    const OJVendingMachine = new VendingMachine();
    expect(OJVendingMachine.dispenseChange(10)).toEqual([10]);
    expect(OJVendingMachine.dispenseChange(20)).toEqual([20]);
    expect(OJVendingMachine.dispenseChange(50)).toEqual([50]);
    expect(OJVendingMachine.dispenseChange(150)).toEqual([100, 50]);
    expect(OJVendingMachine.dispenseChange(190)).toEqual([100, 50, 20, 20]);
    expect(OJVendingMachine.dispenseChange(180)).toEqual([100, 50, 20, 10]);
    expect(OJVendingMachine.dispenseChange(0)).toEqual([]);
  });

  test("dispenseChange method should return correct change for money more than price of orange juice", () => {
    const OJVendingMachine = new VendingMachine();
    expect(OJVendingMachine.dispenseChange(210)).toEqual([10]);
    expect(OJVendingMachine.dispenseChange(220)).toEqual([20]);
    expect(OJVendingMachine.dispenseChange(250)).toEqual([50]);
    expect(OJVendingMachine.dispenseChange(300)).toEqual([100]);
    expect(OJVendingMachine.dispenseChange(230)).toEqual([20, 10]);
    expect(OJVendingMachine.dispenseChange(380)).toEqual([100, 50, 20, 10]);
  });

  test("input method should return OJ and change when enough money", () => {
    const OJVendingMachine = new VendingMachine();
    expect(OJVendingMachine.input([10], [200])).toEqual(["OJ", 10]);
    expect(OJVendingMachine.input([20], [200])).toEqual(["OJ", 20]);
    expect(OJVendingMachine.input([50], [200])).toEqual(["OJ", 50]);
    expect(OJVendingMachine.input([100], [200])).toEqual(["OJ", 100]);
    expect(OJVendingMachine.input([10, 20], [200])).toEqual(["OJ", 20, 10]);
    expect(OJVendingMachine.input([10, 20, 50, 100], [200])).toEqual([
      "OJ",
      100,
      50,
      20,
      10
    ]);
    expect(OJVendingMachine.input([10, 20, 50, 100], [500])).toEqual([
      "OJ",
      200,
      200,
      50,
      20,
      10
    ]);
  });
});
