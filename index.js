function Rabbit() {}
Rabbit.prototype = {
  eats: true,
  constructor: Rabbit,
};

let rabbit = new Rabbit();
let rabbit2 = new rabbit.constructor();
console.log(rabbit2.eats); // true
