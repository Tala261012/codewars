// Напишите функцию camelize(str), которая преобразует строки
// вида «my-short-string» в «myShortString».
function camelize(str) {
  return str
    .split("-")
    .map((item, index) =>
      index === 0 ? item : item[0].toUpperCase() + item.slice(1)
    )
    .join("");
}
console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));
// =====================================================

// Напишите функцию filterRange(arr, a, b),
//которая принимает массив arr, ищет элементы со значениями больше или равными a
// и меньше или равными b и возвращает результат в виде массива.
function filterRange(arr, a, b) {
  return arr.filter((item) => a <= item && item <= b);
}
let arr2 = [2, 5, 3, 8, 1];
let filtered = filterRange(arr2, 1, 4);
console.log(filtered); // [ 2, 3, 1 ]
// =====================================================

// Напишите функцию filterRangeInPlace(arr, a, b),
// которая принимает массив arr и удаляет из него все значения кроме тех,
// которые находятся между a и b. Функция должна изменять принимаемый массив и ничего не возвращать.
function filterRangeInPlace(arr, a, b) {
  let index = arr.findIndex((elem) => elem < a || elem > b);
  while (index >= 0) {
    arr.splice(index, 1);
    index = arr.findIndex((elem) => elem < a || elem > b);
  }
}
let arr3 = [5, 3, 8, 1];
filterRangeInPlace(arr3, 1, 4);
console.log(arr3);
// =====================================================

// У нас есть массив строк arr. Нужно получить отсортированную копию,
// но оставить arr неизменённым.

function copySorted(arr) {
  return arr.slice().sort();
}
let arr4 = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);

console.log(arr4); // [ 'HTML', 'JavaScript', 'CSS' ]
console.log(sorted); // [ 'CSS', 'HTML', 'JavaScript' ]
// =====================================================

// Создать расширяемый калькулятор
function Calculator() {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  };

  this.calculate = function (str) {
    let split = str.split(" "),
      a = +split[0],
      op = split[1],
      b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}

let calc = new Calculator();
console.log(calc.calculate("3 + 7"));

calc.addMethod("*", (a, b) => a * b);
calc.addMethod("/", (a, b) => a / b);
calc.addMethod("**", (a, b) => a ** b);

console.log(calc.calculate("2 ** 3"));
console.log(calc.calculate("6 / 3"));
// =====================================================

/* У вас есть массив объектов user, и у каждого из объектов есть name, surname 
и id. Напишите код, который создаст ещё один массив объектов 
с параметрами id и fullName, где fullName – состоит из name и surname.*/
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [vasya, petya, masha];

let usersMapped = users.map((elem) => ({
  fullname: elem.name + " " + elem.surname,
  id: elem.id,
}));
console.log(usersMapped);
// =====================================================

/* Напишите функцию sortByAge(users), которая принимает массив объектов 
со свойством age и сортирует их по нему.*/
let vasya1 = { name: "Вася", age: 25 };
let petya1 = { name: "Петя", age: 30 };
let masha1 = { name: "Маша", age: 28 };

let arr23 = [vasya1, petya1, masha1];

function sortByAge(arr) {
  return arr.sort((a, b) => a.age - b.age);
}

sortByAge(arr23);
console.log(arr23);
// =====================================================

/*Напишите функцию shuffle(array), которая перемешивает 
(переупорядочивает случайным образом) элементы массива.
Многократные прогоны через shuffle могут привести 
к разным последовательностям элементов. */
let arr24 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function shuffle(arr) {
  const result = [];
  let random = null;

  while (result.length < arr.length) {
    random = Math.trunc(Math.random() * arr.length);

    if (result.includes(arr[random])) continue;

    result.push(arr[random]);
  }

  return result;
}

// решение из учебника
function shuffle2(array) {
  return array.sort(() => Math.random() - 0.5);
}

// решение из учебника 2
function shuffle3(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

console.log(shuffle(arr24));
console.log(shuffle2(arr24));
console.log(shuffle3(arr24));
// =====================================================

/* Напишите функцию getAverageAge(users), 
которая принимает массив объектов со свойством age 
и возвращает средний возраст. */

function getAverageAge(users) {
  return users.reduce((acc, item) => acc + item.age, 0) / users.length;
}

let vasya2 = { name: "Вася", age: 25 };
let petya2 = { name: "Петя", age: 30 };
let masha2 = { name: "Маша", age: 29 };

let arr25 = [vasya2, petya2, masha2];

console.log(getAverageAge(arr25));
// =====================================================

/* Пусть arr – массив строк.
Напишите функцию unique(arr), которая возвращает массив, 
содержащий только уникальные элементы arr. */

function unique(arr) {
  const result = [];

  for (let elem of arr) {
    if (!result.includes(elem)) {
      result.push(elem);
    }
  }

  return result;
}

let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];

console.log(unique(strings));
// P.s. с помощью Map и Set это моно оптимизировать.
// =====================================================

/* Допустим, мы получили массив пользователей в виде 
{id:..., name:..., age:... }.
Создайте функцию groupById(arr), которая создаст из него объект 
с id в качестве ключа и элементами массива в качестве значений. */

let users2 = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

function groupById(arr) {
  const obj = {};

  for (let elemObj of arr) {
    obj[elemObj.id] = elemObj;
  }

  return obj;
}

// решение из учебника
function groupById2(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {});
}

let usersById = groupById(users2);
console.log(usersById);

let usersById2 = groupById2(users2);
console.log(usersById2);

// =====================================================

//* Рекурсия, задачи ======================================================
/*
Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
1. С использованием цикла.
2. Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
3. С использованием формулы арифметической прогрессии.
*/
function sumToCycle(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}
// console.log(sumToCycle(100)); //5050

function sumToRec(n) {
  if (n === 1) return n;
  else {
    return n + sumToRec(n - 1);
  }
}
// console.log(sumToRec(100)); //5050

function sumToArifm(n) {
  return ((1 + n) * n) / 2;
}
// console.log(sumToArifm(100)); //5050
// =======================================================================

// Вычислить факториал ===================================================
function factorial(n) {
  return n != 1 ? n * factorial(n - 1) : 1;
}
// console.log(factorial(5));
// =======================================================================

// Числа Фибоначчи, динамическое программирование снизу вверх.
function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}
// Числа Фибоначчи, рекурсия (очень долго)
function fib2(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
// =======================================================================

// выводит элементы связанного списка по одному ==========================
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};
// рекурсия
function printList(list) {
  console.log(list.value);
  if (list.next) printList(list.next);
}
// цикл
function printListCycle(list) {
  let tmp = list;

  while (tmp) {
    console.log(tmp.value);
    tmp = tmp.next;
  }
}
// printList(list);
// printListCycle(list);

// вывод в обратном порядке
function printReverseList(list) {
  if (list.next) {
    printReverseList(list.next);
  }

  console.log(list.value);
}
// printReverseList(list);
// =======================================================================

// Области видимости =====================================================
/*
Сделайте набор «готовых к употреблению» фильтров:

    inBetween(a, b) – между a и b (включительно).
    inArray([...]) – находится в данном массиве.

Они должны использоваться таким образом:

    arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
    arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива

*/
let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b) {
  return function (x) {
    //!
    return x >= a && x <= b;
  };
}

function inArray(arr) {
  return function (x) {
    return x in arr;
  };
}
console.log(arr.filter(inBetween(3, 6))); // !
console.log(arr.filter(inArray([1, 2, 3])));

// укороченная сортировка ============================
let users10 = [
  { name: "Иван", age: 20, surname: "Иванов" },
  { name: "Пётр", age: 18, surname: "Петров" },
  { name: "Анна", age: 19, surname: "Каренина" },
];

function byField(fieldName) {
  return function (a, b) {
    return a[fieldName] > b[fieldName] ? 1 : -1;
  };
}
console.log(users10.sort(byField("name")));
console.log(users10.sort(byField("age")));
// =======================================================================

// Объкет функции, Named Function Expression =============================
function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }

  counter.set = (value) => (count = value);

  counter.decrease = () => count--;

  return counter;
}

let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1

counter.set(55);

console.log(counter()); // 55
console.log(counter()); // 56

counter.decrease();
counter.decrease();

console.log(counter()); // 55
// =============================================

// Сумма с произвольным количеством скобок sum(0)(1)(2)(3)(4)(5) == 15
// решение здесь
// https://learn.javascript.ru/function-object#tasks
// =======================================================================

// setTimeout, setInterval ===============================================
/*
Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, 
начиная от from и заканчивая to.
Сделайте два варианта решения.
*/
// Используя setInterval.
function printNumbersInterval(from, to) {
  let current = from;

  let timerId = setInterval(() => {
    console.log(current);
    current++;

    if (current > to) clearInterval(timerId);
  }, 1000);
}

// printNumbersInterval(-2, 2);

//Используя рекурсивный setTimeout.
function printNumbersTimeout(from, to) {
  let current = from;

  setTimeout(function next() {
    console.log(current);
    current++;

    if (current <= to) setTimeout(next, 1000);
  }, 1000);
}

printNumbersTimeout(0, 5);

// =======================================================================

// Функции - декораторы
//?  .call, .apply =========================================================
/*
Создайте декоратор spy(func), который должен возвращать обёртку, 
которая сохраняет все вызовы функции в своём свойстве calls.
Каждый вызов должен сохраняться как массив аргументов.
*/

function work(a, b) {
  let result = a + b;
  console.log(result); // произвольная функция или метод
  return result;
}

function spy(func) {
  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, args);
  }
  wrapper.calls = [];

  return wrapper;
}

work = spy(work);

work(1, 2);
work(2, 2);
work(4, 2);

console.log(work.calls);

for (let args of work.calls) {
  console.log("call:" + args.join()); // "call:1,2", "call:2,2"
}

// ===============================
/* Задерживающий декоратор
Создайте декоратор delay(f, ms), который задерживает каждый вызов f 
на ms миллисекунд. 
*/
function f(x) {
  console.log(x);
}

function delay(func, time) {
  return function () {
    setTimeout(() => func.apply(this, arguments), time);
  };
}

let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс

// ===============================

/* Декоратор debounce
Результат декоратора debounce(f, ms) – это обёртка, которая откладывает вызовы f, 
пока не пройдёт ms миллисекунд бездействия (без вызовов, «cooldown period»), 
а затем вызывает f один раз с ПОСЛЕДНИМИ аргументами.
*/
function debounce(func, ms) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, arguments), ms);
  };
}

// почти то же самое
function debounce2(func, ms) {
  let timeout;
  return function (x) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.call(this, x), ms);
  };
}

let f = debounce(console.log, 1000);
f("a");
setTimeout(() => f("b"), 200);
setTimeout(() => f("c"), 500);
// ===============================

// =======================================================================
