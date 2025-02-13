class Animal {}

class Rabbit extends Animal {}
let rabbit = new Rabbit();

// это объект класса Rabbit?
console.log(rabbit instanceof Animal); // true
