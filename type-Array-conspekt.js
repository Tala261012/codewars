//* Array

//? new Array(number)
// создаёт массив с заданной длиной, но без элементов
// или new Array(elem1, elem2, ...)

//? .at(i)
// это ровно то же самое, что и arr[i], если i >= 0.
// для отрицательных значений i, он отступает от конца массива.

//? .lehgth ==========================================================================
// Если быть точными, это не количество элементов массива,
// а наибольший цифровой индекс плюс один!
let fruits = [];
fruits[123] = "Яблоко";
console.log(fruits.length); // 124 !!!
// Если вручную изменить .length данные будут утеряны!
// arr.length = 0;.- очистка массива
let arr100 = [1, 2, 3, 4, 5];
arr100.length = 2;
console.log(arr100); // [ 1, 2 ]

//? for..of ===========================================================================
// не предоставляет доступа к номеру текущего элемента, только к значению
//? for..in
// Доступ к индексу. Намного медленнее, т к создан для объектов
//? for (;;)

//? .push(elem1, elem2, ...) ==========================================================
// добавляет элемент(ы) в конец. Возвращает число - обновленную длинну
//? .pop()
// удоаляет последний элемент массива. Возвращает его значение
//? .unshift(elem1, elem2, ...)
// добавляет новые элемениы в начало массива. Возвращает обновленную длинну. Индексы смещаются.
//? .shift()
// удоаляет первый элемент массива. Возвращает его значение

// Методы push/pop выполняются быстро, а методы shift/unshift – медленно.

//? .splice(start, deleteCount?, elem1?, ..., elemN?) ==============================
// start (обяз) с этого индекса удаляет deleteCount элементов. Не указан - удалять до конца
// Отрицательные индексы разрешены
// elem1, ..., elemN вставляет на их место
// Возвраацает массив из удаленных элемнтов
//? .slice(start?, end?)
// копирует все элементы с индекса start до end (не включая).
// start и end могут быть отрицательными - отсчёт позиции будет вестись с конца.
// start и end не указаны - КОПИРУЕТ ВЕСЬ массив
// возвращает новый массив

//? .concat(arg1?, arg2?, ...) =====================================================
// принимает любое кол-во аргументов, которые могут быть как массивами, так и простыми значениями.
// возвращает НОВЫЙ массив, не измменяет аргументы

//? .forEach((item, index?, array?) => {}, thisArg?) ===============================
// перебирает массив без создания нового
// НИЧЕГО не возвращает, ничего не изменяет в самом массиве

//? .indexOf(item, from?) ==========================================================
// ищет item начиная с индекса from
// возвращает номер индекса или -1
//? .lastIndexOf(item, from?)
// ищет справа налево
//? .includes(item, from?)
// возвращает true/false

//? .find((item, index?, array?) => {}, thisArg?) ==================================
//? .findLast
// вызывается по очереди для каждого элемента массива. Ищет один (ПЕРВЫЙ) элемент,
// который заставит функцию вернуть true.
// Тогда поиск прерывается и возвращается item.
// Если ничего не найдено, возвращается undefined.
// Удобно для поиска по массиву с объектами
//? findIndex/findLastIndex
// такой же синтаксис. Возвращает индекс или -1.
let users10 = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 3, name: "Маша" },
];

let user10 = users10.find((item) => item.id == 1);
let userIndex10 = users10.findIndex((item) => item.name == "Маша");

console.log(
  `Имя пользователя с id = 1: ${user10.name}, индекс в массиве у Маши: ${userIndex10} `
);
// Если найденных элементов может быть много, можно использовать
//? .filter((item, index?, array?) => {}, thisArg?))
// callback-функция возвращает true/false
// filter возвращает новый (отфильтрованный) МАССИВ.

//? .map((item, index?, array?) => {}, thisArg?)) ==================================
// Преобразование
// вызывает функцию для каждого элемента массива и
// возвращает МАСССИВ РЕЗУЛЬТАТОВ выполнения этой функции.
//? .sort((elemA?, elemB?) => {true/false}?, thisArg)
// сортирует массив на месте, меняя в нём порядок элементов
// возвращает отсортированный массив,
// но обычно возвращаемое значение игнорируется, так как изменяется сам arr
// без аргументов arr.sort() - элементы сортируются как строки
// arr.sort((a, b) => b - a) - сортирует по убыванию
// arr.sort((a, b) => а - b) - сортирует по возрастанию
//? .toSorted((elemA?, elemB?) => {true/false}?, thisArg)
// это копируюцая массив версия метода sort()
//? .reverse()
// меняет порядок элементов в arr на обратный.
// возвращает массив arr с изменённым порядком элементов

//? split и join ======================================================================

//? str.split(separator, number?)
// разбивает строку на массив по заданному разделителю separator
// number (необяз) - ограничение на кол-во элементов в массиве. Если их больше, то остаток массива будет отброшен.
let str10 = "test";
console.log(str10.split("")); //[ 't', 'e', 's', 't' ]
//? arr.join(glue)
// создает из массива строку, вставляя между элементами glue

//? .reduce((accumulator, item, index?, array?) => {}, initial?) ======================
//? .reduceRight((accumulator, item, index?, array?) => {}, initial?)
// вычисление единого значения на основе всего массива.
// Функция применяется по очереди ко всем элементам массива
// и «переносит» свой результат на следующий вызов
// accumulator – результат предыдущего вызова этой функции,
// равен initial при первом вызове (если передан initial),
// item – очередной элемент массива
// index – его позиция,
// array – сам массив.
// при отсутствии initial в качестве первого значения берётся первый элемент массива,
// а перебор стартует со второго!

//? Array.isArray(value) ==============================================================
// является ли value массивом?
// true/false

//? thisArg
// Значение параметра thisArg становится this для callbackFunc
let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  },
};

let users = [{ age: 16 }, { age: 20 }, { age: 23 }, { age: 30 }];

// найти пользователей, для которых army.canJoin возвращает true
let soldiers = users.filter(army.canJoin, army);

console.log(soldiers.length); // 2
console.log(soldiers[0].age); // 20
console.log(soldiers[1].age); // 23

//? .some(fn, thisArg) / .every(fn, thisArg) ==========================================
// работоют как || и  &&
// fn(item, index?, array?) должна возвращать true/false
// Можно использовать для сравнения массивов
function arraysEqual(arr1, arr2) {
  return (
    arr1.length === arr2.length &&
    arr1.every((value, index) => value === arr2[index])
  );
}

console.log(arraysEqual([1, 2], [1, 2])); // true

//? .fill(value, start, end) ==========================================================
// заполняет массив повторяющимися value, начиная с индекса start до end (не включая)
//? .copyWithin(target, start, end)
// копирует свои элементы, начиная с позиции start и заканчивая end,
// в себя, на позицию target (перезаписывая существующие).

//? .flat(depth?) ======================================================================
// Разворачивание (выравнивание) вложенных массивов на глубину depth
// by def depth === 1, т е из 3х-уровневого массива сделает 2х-уровневый
// возврацает новый массив
//? arr.flatMap((elem, index, array) => {}, thisArg)
// объединение flat с глубиной 1  и map

//? P.s.
// push, pop, shift, unshift, sort, reverse и splice изменяют исходный массив.

//? Array.from(arrayLike, (elem, index) => {}?, thisArg?) =============================
// универсальный метод, принимает итерируемый объект или псевдомассив
// и делает из него «настоящий» Array.
// После этого мы уже можем использовать методы массивов.

const obj7 = {
  0: "hello",
  1: "world",
  2: "!!!",
  length: 3,
  prefix: "():",
};

const arr7 = Array.from(obj7);
console.log(arr7); // [ 'hello', 'world', '!!!' ]

//TODO стрелочные функции плохо работают с this... (?)
// поэтому в этом примере именно function
const arr8 = Array.from(
  obj7,
  function (elem, index) {
    return `${this.prefix} ${elem}`;
  },
  obj7
);
console.log(arr8); //  [ '(): hello', '(): world', '(): !!!' ]
console.log(Array.from("john")); // [ 'j', 'o', 'h', 'n' ]
console.log(Array.from([1, 2, 3], (x) => x * 2)); // [ 2, 4, 6 ]

//? Array.of(elem1, ..., elemN)
// Создает новый массив из любого кол-ва аргументов
const arrA = [1, 2, 3];
const arrB = [4, 5, 6];
console.log(Array.of(arrA, arrB)); // [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]

//? Symbol.iterator ===================================================================
let range = {
  from: 1,
  to: 5,
};

range[Symbol.iterator] = function () {
  return {
    current: this.from,
    last: this.to,
    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
};

for (let num of range) {
  console.log(num);
}

// явный вызов метода next()
let iterator = range[Symbol.iterator]();
while (true) {
  let result = iterator.next();
  if (result.done) break;
  console.log(result.value); // выводит символы один за другим
}

console.log(Array.from(range)); // [ 1, 2, 3, 4, 5 ]
