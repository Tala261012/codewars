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

? У стрелочных функций нет super и this !!!

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
=================================================================================

? static
ВЫЗЫВАЕТСЯ ТОЛЬКО ИЗ КЛАССА и игнорирует любые вызовы из объектов.

Статическими бывают методы и свойства.

Статические методы (и свойства) недоступны для отдельных объектов(-воплощений) !!!
Такой метод стоит «над» объектами, как средство для их, например, сравнения. 
Это метод не отдельного объекта, а ВСЕГО КЛАССА
Отдельным "воплощениям" недоступны статические методы и свойства класса.

Технически, статическое объявление – это то же самое, что и присвоение классу:
MyClass.property = ...
MyClass.method = ...

Статические свойства и методы НАСЛЕДУЮТСЯ.
"статичный", то есть "есть всегда" - независимо создан объект или нет.

? Приватные и защищённые методы и свойства ======================================
В ООП свойства и методы разделены на 2 группы:
Приватные - внутренний интерфейс 
– методы и свойства, доступные из других методов класса, но не снаружи класса.
Публичные - внешний интерфейс 
– методы и свойства, доступные снаружи класса

* _prop
Защищённые свойства обычно начинаются с префикса _

Они назначаются с помощью геттеров/сеттеров. Можно сделать проверку.
Хотя в большинстве случаев использование функций get.../set... предпочтительнее:
Они могут принимать несколько аргументов

? Защищённые поля наследуются

* #prop
Приватные свойства и методы должны начинаться с #. 
Они доступны только внутри класса.

? Не наследуются.
Доступ есть только внутри своего класса.

? static #prop
Если мы хотим "закрыть" к использованию приватных свойств/методов даже у экземпляров 
класса (его обьектов), то есть оставить доступ только при прямом обращению к классу, 
то нужно использовать static перед обьявления этого свойства, 
а так же для его геттера и сеттера

В терминах ООП отделение внутреннего интерфейса от внешнего называется 
? инкапсуляция
*/
