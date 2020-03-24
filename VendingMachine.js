class VendingMachine {
  constructor() {
    this.orangeJuicePrice = 200;
  }

  sumInput(moneyInserted) {
    if (moneyInserted.length === 0) {
      return 0;
    }
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return moneyInserted.reduce(reducer);
  }

  checkSufficientMoney(totalMoney) {
    const hasEnoughCoins = totalMoney >= this.orangeJuicePrice ? true : false;
    if (hasEnoughCoins) {
      return ["OJ"];
    } else {
      return [];
    }
  }

  dispenseChange(totalMoney) {
    if (totalMoney >= 200) {
      totalMoney -= 200;
    }

    const arrOfChange = [];
    let moneyRemaining = totalMoney;
    const denominations = [500, 200, 100, 50, 20, 10];
    for (let i = 0; i < denominations.length; i++) {
      let moneyToDispense = Math.floor(moneyRemaining / denominations[i]);
      while (moneyToDispense !== 0) {
        arrOfChange.push(denominations[i]);
        moneyToDispense -= 1;
        moneyRemaining -= denominations[i];
      }
    }
    return arrOfChange;
  }

  input(coins, notes) {
    const totalMoney = this.sumInput(coins) + this.sumInput(notes);
    const orangeJuiceOutput = this.checkSufficientMoney(totalMoney);
    const output = orangeJuiceOutput.concat(this.dispenseChange(totalMoney));
    return output;
  }
}

module.exports = VendingMachine;
