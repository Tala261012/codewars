//* String

//? Сроки неизменяемы!

//? \
// символ экранирования, \t - tab, \n - enter
//? .length
// свойство, длинна строки
//? `${выражение}`

//? str[index], str.at(index)
// доступ к символу (начиная с 0), str.at(i) можно использовать отриыательное значение
let str = `Hello`;
// console.log(str.at(-1)); // o

// Также можно перебрать строку посимвольно, используя
//? for..of
// for (let char of str) {
//   console.log(char);
// }

//? toLowerCase() и toUpperCase()
// меняют регистр символов

//? str.indexOf(substr, pos)
// ищет подстроку substr в строке str, начиная с позиции pos,
// и возвращает позицию, на которой располагается совпадение, либо -1
//? str.lastIndexOf(substr, position)
// похожий метод, ищет с конца строки к её началу
// position - это будет типа-коеец строки
let str2 = "Ослик Иа-Иа посмотрел на виадук";
let target = "Иа";

let pos = -1;
while ((pos = str2.indexOf(target, pos + 1)) != -1) {
  console.log(pos);
}

console.log("last index ", str2.lastIndexOf(target, 7)); // т е искать раньше 7
