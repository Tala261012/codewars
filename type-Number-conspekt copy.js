//* Numbers

//? _
// (подчеркивание) - синтаксический сахар для облегчения восприятия
let billion = 1_000_000_000;
console.log(billion); //1000000000

//? "e"
// умножает число на 1 с указанным количеством нулей.
let hundred300 = 1.3e3;
console.log(hundred300); //1300

let millisec5 = 0.005;
let msec5 = 5e-3; // 3 нуля слева от цифры, т е деление на 1 с указанным кол-вом нулей
console.log(msec5); // 0.005

//? 0xff ===========================================================================
// Шестнадцатеричные числа
console.log(0xff); // 255

//? 0b11111111
// Двоичные числа
let a = 0b11111111; // двоичная (бинарная) форма записи числа 255
console.log(a); // 255

//? 0o377
// Восьмеричные числа
let b = 0o377; // восьмеричная форма записи числа 255
console.log(b); // 255

//? toString(base)
//возвращает строковое представление числа num в системе счисления base (от 2 до 36).
let num = 255;

console.log(num.toString(16)); // ff
console.log(num.toString(2)); // 11111111

//? Округление =======================================================================
// в меньшую сторону
console.log(Math.floor(-1.1)); // -2
// в большую сторону
console.log(Math.ceil(-1.9)); // -1
console.log(Math.ceil(2.1)); // 3
// до ближайшего целого - нормальное округление
console.log(Math.round(2.5)); // 3
// удаление дробной части без округления
console.log(Math.trunc(2.5)); // 2

//?  toFixed(n)
// округляет число до n знаков после запятой и возвращает строку!
num = 1.2346;
console.log(num.toFixed(3)); // 1.235
console.log(num.toFixed(8)); // 1.23460000

//? toPrecision(n)
//представить число указанной (n) длинны
console.log((104914.5).toPrecision(3)); // 1.05e+5

//? toExponential(n)
// возврацает строку - число в экпоненциальное формате, n - кол-во знаков после запятой
console.log((56_645_500).toExponential(3)); // 5.7e+4

//? Неточные вычисления ===============================================================
// Использовать toFixed(n) или умножать до целого (0.1*10)
console.log(0.1 + 0.2 == 0.3); // false!
console.log(0.1 + 0.2); // 0.30000000000000004

//? isNaN(value)
// преобразует значение в число и проверяет является ли оно NaN
// NaN  не является равным ничему другому, даже самому себе!
console.log(NaN === NaN); // false

//? isFinite(value)
// преобразует аргумент в число и возвращает true, если оно является обычным числом,
// т.е. не NaN/Infinity/-Infinity
// пустая строка интерпретируется как 0 во всех числовых функциях, включаяisFinite.

//? Number.isNaN и Number.isFinite
// это более «строгие» версии функций isNaN и isFinite, НЕ преобразуют аргумент в число

//? Number.isInteger(value)
// Является ли value целым? true/false
console.log("Целое? ", Number.isInteger(Infinity)); //false

//? Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER  =================================
// для целых чисел
console.log("Максимальное безопасное целое: ", Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log("Минимальное безопасное целое: ", Number.MIN_SAFE_INTEGER); //  -9007199254740991

//? Number.MAX_VALUE,  Number.MIN_VALUE
//для дробных
console.log("Максимальное значение: ", Number.MAX_VALUE);
console.log("Минимальное значение: ", Number.MIN_VALUE);

//? Number.isSafeInteger(value)
// Является ли value безопасным целым? true/false
// Дробное/NaN/строка/null/undefined - false

//? parseInt(str, radix) ===============================================================
// читаtт число из строки. Если в процессе чтения возникает ошибка,
// возвращаtт полученное до ошибки число (целое)
// radix - необязательный второй параметр,  системa счисления, в которой записано число в сторе str
console.log(parseInt("100px")); // 100
console.log(parseInt("ff", 16)); // 255

let my = 0b11001000;
console.log(my.toString()); //200
console.log(parseInt("11001000", 2)); // 200

//? parseFloat()
// возвращает число с плавающей точкой:
console.log(parseFloat("12.5em")); // 12.5

//? Math ===============================================================================
// ообъект со ввстроенноыми математическими функциями

// Документация:
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math

// Math.PI
// Math.max(n1, n2, ...), Math.min()
// Math.sign(x) - знак числа: 1 х>0, -1 x<0
// Math.pow(base, exponent) возводит в степень
// Math.sqrt(x) квадратный корень из х
// Math.random() генератор случайных чисел: от 0(включительно) до 1(не включая)
