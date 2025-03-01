/*
* Модули

? export 
отмечает переменные и функции, которые должны быть доступны вне текущего модуля.
? import 
позволяет импортировать функциональность из других модулей.

Модули не работают локально. Только через HTTP(s)
В модулях всегда используется режим use strict. 
Каждый модуль имеет свою собственную область видимости. 
*/

// 📁 sayHi.js
export function sayHi(user) {
  alert(`Hello, ${user}!`);
}

// 📁 main.js
import { sayHi } from "./sayHi.js";
alert(sayHi); // function...
sayHi("John"); // Hello, John!
