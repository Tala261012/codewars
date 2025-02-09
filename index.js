class Animal {
  name = "animal";

  constructor() {
    console.log(this.name); // (*)
  }
}

class Rabbit extends Animal {
  name = "rabbit";
}

let animal = new Animal(); // animal
let rabbit = new Rabbit(); // animal
console.log(rabbit.name);
