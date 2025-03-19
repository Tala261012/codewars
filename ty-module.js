/*
* Модули

? СТАТИЧЕСКИЙ ИМПОРТ/ЭКСПОРТ ====================================================

? export 
отмечает переменные и функции, которые должны быть доступны вне текущего модуля.
все следующие экспорты допустимы: */
// экспорт массива
export let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
// экспорт константы
export const MODULES_BECAME_STANDARD_YEAR = 2015;
// экспорт класса
export class User {
  constructor(name) {
    this.name = name;
  }
}
// Экспорт отдельно от объявления:
// 📁 say.js
function sayHi(user) {
  alert(`Hello, ${user}!`);
}
function sayBye(user) {
  alert(`Bye, ${user}!`);
}
export { sayHi, sayBye }; // список экспортируемых переменных

/*
? export default ...
Экспорт по умолчанию (если модуль экспортирует только что-то одно)
в файле может быть ТОЛЬКО ОДИН export default.
Именованные экспорты тоже могут быть в этом файле, но это плохой стиль.
*/
// 📁 user.js
export default class User {
  // просто добавьте "default"
  constructor(name) {
    this.name = name;
  }
}
// 📁 main.js
import User from "./user.js"; // не {User}, просто User, можно и ДРУГОЕ имя
new User("John");
/*
Технически в одном модуле может быть как экспорт по умолчанию, 
так и именованные экспорты, но на практике обычно их не смешивают. 
То есть, в модуле находятся либо именованные экспорты, 
либо один экспорт по умолчанию.

Так как в файле может быть только один export default, 
то экспортируемая сущность не обязана иметь имя.

export default class { // у класса нет имени
  constructor() { ... }
}

export default function(user) { // у функции нет имени
  alert(`Hello, ${user}!`);
}

экспортируем значение, не создавая переменную
export default ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

то же самое, как если бы мы добавили "export default" перед функцией
export {sayHi as default};

если экспортировались дефолтный вариант и именованые экспорты:
(тут User - класс)
import {default as User, sayBye} from './user.js';

если импортировалось все как объект (User - класс):
import * as user from './user.js';

let User = user.default; // экспорт по умолчанию
new User('John');
*/

/*
? import './path/to/script'
выполнить тут скрипт из файла по адресу
? import ... from
позволяет импортировать функциональность из других модулей.

Модули не работают локально. Только через HTTP(s)
В модулях всегда используется режим use strict. 
Каждый модуль имеет свою собственную область видимости. 
*/
// 📁 main.js
import { sayHi, sayBye } from "./say.js";
sayHi("John"); // Hello, John!
sayBye("John"); // Bye, John!

/* Если импортировать нужно много, можно импортировать ВСЁ в виде объекта, используя 
? import * as <obj>. 
*/
// 📁 main.js
import * as say from "./say.js";
say.sayHi("John");
say.sayBye("John");

/*
? as
чтобы импортировать под другими именами */
// 📁 main.js
import { sayHi as hi, sayBye as bye } from "./say.js";
hi("John"); // Hello, John!
bye("John"); // Bye, John!

// Экспортировать "как" тоже можно:
export { sayHi as hi, sayBye as bye };
// Теперь hi и bye – официальные имена для внешнего кода,
// именно их нужно использовать при импорте.

//? export ... from
// Реэкспорт
// Когда нужно импортировать в текущий файл и экспортировать дальше:

// 📁 auth/index.js
// импортировать login/logout и тут же экспортировать
import { login, logout } from "./helpers.js";
export { login, logout };

// импортировать экспорт по умолчанию как User и тут же экспортировать
import User from "./user.js";
export { User };

// export ... from - более короткая запись:

// 📁 auth/index.js
// импортировать login/logout и тут же экспортировать
export { login, logout } from "./helpers.js";

// импортировать экспорт по умолчанию как User и тут же экспортировать
export { default as User } from "./user.js";

// реэкспортирует только именованные экспорты, ИСКЛЮЧАЯ экспорт по умолчанию
export * from "./user.js";

// Если мы хотим реэкспортировать и именованные экспорты и экспорт по умолчанию,
// то понадобятся две инструкции:
export * from './user.js'; // для реэкспорта именованных экспортов
export {default} from './user.js'; // для реэкспорта по умолчанию

/* Примечания ===================================================================
? инструкции import/export НЕ РАБОТАЮТ внутри {...} !!!
Не может быть условных импортов.

? import.meta
Этот объект содержит информацию о текущем модуле.
import.meta.url - адрес модуля

? В модуле «this» не определён
на верхнем уровне 
по сравнению с не-модульными скриптами, где this – глобальный объект:
<script>
  alert(this); // window
</script>

<script type="module">
  alert(this); // undefined
</script>

? Внешние модули всегда выполняются в отложенном (deferred) режиме,
после полной загрузки HTML документа.
Сохраняется порядок скриптов: кто раньше в документе, выполняются раньше.
Обычные скрипты (не-модульные) запускаются сразу же.
*/


/*
? ДИНАМИЧЕСКИЙ  ИМПОРТ/ЭКСПОРТ ==================================================

? import(modulePath)
загружает модуль и возвращает промис, результатом которого становится объект модуля, 
содержащий все его экспорты.

import(modulePath)
  .then(obj => <объект модуля>)
  .catch(err => <ошибка загрузки, например если нет такого модуля>)

Пример 1
let {hi, bye} = await import('./say.js');
hi();
bye();

Пример 2
если say.js содержит экспорт по умолчанию, то надо взять свойство default объекта модуля:

let obj = await import('./say.js');
let say = obj.default;

или, одной строкой: let {default: say} = await import('./say.js');

say();
*/

/*
? Node.js =======================================================================

? require(path)
импорт модулей в нод.
let test = require('./test.js')

? module.exports
встроенное свойство объекта module, которое используется для экспорта значения из текущего модуля.
Когда вы присваиваете значение в module.exports,
вы делаете его доступным для импорта в другие файлы или пакеты с помощью require

...
module.exports = {add, subtract}

...
const {add, subtract} = require('./utils.js')
*/