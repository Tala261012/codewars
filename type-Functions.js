//* Функции

//? Функции - это объкеты =======================================================
// встроенное свойство «length» содержит количество параметров функции в её объявлении.
// Троеточие («остаточные параметры») не считается.

// можно назначать функциям свойства, например sayHi.counter

function sayHi() {
  console.log("Hi");

  sayHi.counter++;
  if (sayHi.counter >= 5) console.log("Enough!");
}
sayHi.counter = 0; // начальное значение

sayHi(); // Hi
sayHi(); // Hi
sayHi(); // Hi
sayHi(); // Hi
sayHi(); // Hi

console.log(`Функция вызвана ${sayHi.counter} раз(а)`);
console.log(`Количиство параметров функции: ${sayHi.length}`); // 0
// ==============================================================================

//? Named Function Expression ===================================================
// Именованное Функциональное Выражение
// Внутреннее имя (дополнительное), таким образом она может вызвать себя изнутри.
let sayHi = function func(who) {
  //! func - доп имя
  if (who) {
    alert(`Hello, ${who}`);
  } else {
    func("Guest"); // Теперь всё в порядке, рекурсия в функциональном выражении
  }
};

let welcome = sayHi;
sayHi = null;

welcome(); // Hello, Guest (вложенный вызов работает)
// ==============================================================================

//* new Function ================================================================
/*
Синтаксис
? let func = new Function(arg1?, arg2?, ...argN?, functionBody);
Функция создаётся с заданными аргументами arg1...argN и телом functionBody.

new Function позволяет превратить любую строку в функцию. 
Например, можно получить новую функцию с сервера и затем выполнить её:

let str = ... код, полученный с сервера динамически ...

let func = new Function(str);
func();

? такая функция имеет доступ только к глобальным переменным (из-за минифакторов).

Эти 3 объявления ниже эквивалентны:
new Function('a', 'b', 'return a + b'); // стандартный синтаксис
new Function('a,b', 'return a + b'); // через запятую в одной строке
new Function('a , b', 'return a + b'); // через запятую с пробелами в одной строке
*/

//* cachingDecorator ============================================================
function slow(x) {
  // здесь могут быть ресурсоёмкие вычисления
  let result = x * 10;
  console.log(`Called with ${x}`);
  return result;
}

function cachingDecorator(func) {
  let cache = new Map();

  return function (x) {
    if (cache.has(x)) {
      // если кеш содержит такой x,
      return cache.get(x); // читаем из него результат
    }

    let result = func(x); // иначе, вызываем функцию

    cache.set(x, result); // и кешируем (запоминаем) результат
    return result;
  };
}

slow = cachingDecorator(slow);

console.log(slow(1)); // slow(1) кешируем
console.log("Again: " + slow(1)); // возвращаем из кеша
console.log(slow(2)); // slow(2) кешируем
console.log("Again: " + slow(2)); // возвращаем из кеша
// ==========================================================================

/*
https://learn.javascript.ru/call-apply-decorators#primenenie-func-call-dlya-peredachi-konteksta

?  func.call(context, …args)
Он запускает функцию func, используя первый аргумент 
как её контекст this, а последующие – как её аргументы.
func - имя функции

func(1, 2, 3);
func.call(obj, 1, 2, 3)
Они оба вызывают func с аргументами 1, 2 и 3. Единственное отличие 
состоит в том, что func.call ещё и устанавливает this равным obj.

? func.apply(context, args)
Он выполняет func, устанавливая this=context и принимая 
в качестве списка аргументов псевдомассив args.

Единственная разница в синтаксисе между call и apply состоит в том, 
что call ожидает список аргументов, в то время как apply принимает псевдомассив.

func.call(context, ...args); // передаёт массив как список с оператором расширения
func.apply(context, args);   // тот же эффект
*/
