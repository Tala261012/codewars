//* Symbol
// символы всегда уникальны, даже если их имена (ключи) совпадают ============

// Создание
let id = Symbol("id");

// вывести описание ============================================================
//? .description
console.log(id.description); // id

// Свойства, чьи ключи – символы, не перебираются циклом for..in. ==============
let user = {
  name: "Вася",
  age: 30,
  [id]: 123,
};

for (let key in user) console.log(key); // name age

// Object.keys(user) также игнорирует символы ==================================
const userArr = Object.keys(user);

console.log(userArr); // [ 'name', 'age' ]

// Object.assign копирует и строковые, и символьные свойства: ==================
const clone = Object.assign({}, user);

console.log(clone); // { name: 'Вася', age: 30, [Symbol(id)]: 123 }

// глобальный реестр символов. =================================================
// Мы можем создавать в нём символы и обращаться к ним позже,
// и при каждом обращении нам гарантированно будет возвращаться один и тот же символ.
// Для четния или (усли такого нет) создания глобального символа:
//? Symbol.for(key)

let sym = Symbol.for("sym");
let symAgain = Symbol.for("sym");

console.log(sym === symAgain); // true

// принимает ГЛОБАЛЬНЫЙ символ, возвращает его имя, обратный Symbol.for(key) ==
// не работает для неголобальных символов. (.description работает для всех)
//? Symbol.keyFor(sym)

let symName = Symbol.keyFor(sym);
let symNameAgain = Symbol.keyFor(symAgain);

console.log(symName); // sym
console.log(symNameAgain); // sym

// Существует множество «системных» символов, использующихся внутри самого JavaScript,
// и мы можем использовать их, чтобы настраивать различные аспекты поведения объектов.
// Эти символы перечислены в спецификации в таблице Well-known symbols:
// https://tc39.github.io/ecma262/#sec-well-known-symbols

// Symbol.hasInstance
// Symbol.isConcatSpreadable
// Symbol.iterator
// Symbol.toPrimitive
// и т д
