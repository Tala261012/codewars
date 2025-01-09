//* Остаточные параметры / Оператор расширения (...)
/*
Остаточные параметры могут быть обозначены через три точки ... 
Буквально это значит: «собери оставшиеся параметры и положи их в массив».

? у стрелочных функций нет собственного this. !!!
*/
function showName(firstName, lastName, ...titles) {
  console.log(firstName + " " + lastName); // Юлий Цезарь

  // Оставшиеся параметры пойдут в массив
  // titles = ["Консул", "Император"]
  console.log(titles[0]); // Консул
  console.log(titles[1]); // Император
  console.log(titles.length); // 2
}

showName("Юлий", "Цезарь", "Консул", "Император");

// Когда ...arr используется при ВЫЗОВЕ ФУНКЦИИ (а не в параметрах функции),
//он «расширяет» перебираемый объект arr в список аргументов.
let arr = [3, 5, 1];
console.log(Math.max(...arr)); // 5

// Слияние массивов
let arr1 = [3, 5, 1];
let arr2 = [8, 9, 15];

let merged = [0, ...arr1, 2, ...arr2];

/*
? оператор расширения работает с любым перебираемым объектом.
строка -->> массив
let str = "Привет";
console.log( [...str] ); // П,р,и,в,е,т

? Array.from(obj) vs [...obj]
- Array.from работает как с псевдомассивами, так и с итерируемыми объектами
- Оператор расширения работает только с итерируемыми объектами (но не с плсевдомассивами)
Выходит, что если нужно сделать из чего угодно массив, 
то Array.from — более универсальный метод.

? Итого
- Если ... располагается в конце списка параметров функции, 
то это «остаточные параметры». Он собирает остальные неуказанные аргументы 
и ДЕЛАЕТ из них массив.
- Если ... встретился в вызове функции или где-либо ещё, 
то это «оператор расширения». Он извлекает элементы ИЗ массива.

- Остаточные параметры используются, чтобы 
создавать новые функции с неопределённым числом аргументов.
- С помощью оператора расширения можно вставить массив в функцию, 
которая по умолчанию работает с обычным списком аргументов.
*/

let [...foo] = "someString";
console.log(foo); //['s', 'o', 'm', 'e', 'S', 't', 'r', 'i', 'n', 'g']

function bar([...foo]) {
  // из переданной строки получается массиив с именем foo
  for (let i of foo) console.log(i);
}
bar("someString"); // выводит по одной букве

let myObj = {
  name: "Ivan",
  age: 70,
};
// истинное КОПРОВАНИЕ объекта, а не ссылки на него
let myObj2 = { ...myObj };
myObj.city = "Kyiv";
console.log(myObj2); // без Kyiv

//? Вложенная деструктуризация ==================================================
/*
Можно извлекать данные из вложенных объектов и массивов, 
для этого левая сторона должна иметь ту же структуру, что и правая.
*/
let options = {
  size: {
    width: 100,
    height: 200,
  },
  items: ["Cake", "Donut"],
  extra: true,
};

// деструктуризация разбита на несколько строк для ясности
let {
  size: {
    // положим size сюда
    width,
    height,
  },
  items: [item1, item2], // добавим элементы к items
  title = "Menu", // отсутствует в объекте (используется значение по умолчанию)
} = options;
console.log(title); // Menu
console.log(width); // 100
console.log(height); // 200
console.log(item1); // Cake
console.log(item2); // Donut

// Деструктуризация происходит при вызове функции
// совйство объекта incomingProperty будет присвоено переменной varName (т е переименование)
// если такого свойства нет, то переменной varName будет присвоено значение по умолчанию defaultValue
function showMenu({
  incomingProperty: varName = defaultValue,
  // ...
}) {}
// ==============================================================================
