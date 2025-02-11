class CoffeeMachine {
  #waterLimit = 200;
  _power = 0;

  constructor(power = 100) {
    this._power = power;
  }

  #checkWater(value) {
    if (value < 0) throw new Error("Отрицательный уровень воды");
    if (value > this.#waterLimit) throw new Error("Слишком много воды");
  }

  setWaterLimit(value) {
    if (value > 0) this.#waterLimit = value;
  }

  getWaterLimit() {
    return this.#waterLimit;
  }
}

let coffeeMachine = new CoffeeMachine(100);

// снаружи нет доступа к приватным методам класса
console.log(coffeeMachine._power); // 100
coffeeMachine.setWaterLimit(1000);
console.log(coffeeMachine.getWaterLimit());
