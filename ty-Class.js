//* class

// База:
class MyClass {
  prop = value; // свойство
  constructor(value) {
    // конструктор
    // ...
  }
  method() {} // метод
  get something() {} // геттер
  set something(value) {} // сеттер
  [Symbol.iterator]() {} // метод с вычисляемым именем (здесь - символом)
  // ...
}
// ...
let unit = new MyClass();

/*
? класс – это разновидность функции
Код  берётся из метода constructor
Сохраняет все методы в MyClass.prototype.

Функция, созданная с помощью class, помечена специальным внутренним свойством 
[[IsClassConstructor]]: true. 

? конструктор класса не может быть вызван без new !

? Методы класса являются неперечислимыми
Определение класса устанавливает флаг enumerable в false для всех методов в "prototype".

? При объявлении класса геттеры/сеттеры относятся к (создаются в) User.prototype

? Свойства
не устанавливается в User.prototype. 
Они создаётся оператором new перед запуском конструктора, 
это именно свойство ОБЪЕКТА.

? extends
class Child extends Parent {}
Наследование

? После extends разрешены любые выражения
function f(phrase) {
  return class {
    sayHi() { console.log(phrase); }
  };
}
class User extends f("Привет") {}
new User().sayHi(); // Привет

? super
- super.method(...) вызывает родительский метод.
- super(...) для вызова родительского конструктора 
(работает только ВНУТРИ НАШЕГО  конструктора).

? У стрелочных функций нет super !!!

TODO Конструкторы в наследуемых классах должны ОБЯЗАТЕЛЬНО вызывать super(...), 
TODO и (!) делать это ПЕРЕД использованием this.
*/
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed = speed;
    console.log(`${this.name} бежит со скоростью ${this.speed}.`);
  }

  stop() {
    this.speed = 0;
    console.log(`${this.name} стоит.`);
  }
}

class Rabbit extends Animal {
  constructor(name, earalength) {
    super(name);
    this.earalength = earalength;
  }

  hide() {
    console.log(`${this.name} прячется!`);
  }

  stop() {
    super.stop(); // вызываем родительский метод stop
    this.hide(); // и затем hide
  }
}

let rabbit = new Rabbit("Белый кролик");

rabbit.run(5); // Белый кролик бежит со скоростью 5.
rabbit.stop(); // Белый кролик стоит. Белый кролик прячется!

/*
? Тонкости ======================================================================

? Родительский конструктор всегда использует родительское поле !!! 

? Методы запоминают свои объекты. [[HomeObject]] 
нельзя изменить, эта связь – навсегда.

Когда функция объявлена как метод внутри класса или объекта, 
её свойство [[HomeObject]] становится равно этому объекту.

Свойство [[HomeObject]] определено для методов как классов, так и обычных объектов. 
Но для объектов методы должны быть объявлены именно как method(), 
а не "method: function()" В последнем случае [[HomeObject]] не будет создан.
*/
