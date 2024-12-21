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
