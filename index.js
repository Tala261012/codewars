let sayHiMixin = {
  sayHi() {
    console.log(`Привет, ${this.name}`);
  },
  sayBye() {
    console.log(`Пока, ${this.name}`);
  },
};

// использование:
class User {
  constructor(name) {
    this.name = name;
  }
}

// копируем методы
Object.assign(User.prototype, sayHiMixin); // !

class Person extends User {}

// теперь User может сказать Привет
new User("Вася").sayHi(); // Привет, Вася!
new Person("Vova").sayHi();
