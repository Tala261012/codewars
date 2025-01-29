//* Функции

//? Функции - это объкеты =======================================================
// можно назначать функциям свойства (добавлять свойства к объекту),
// например sayHi.counter
// Свойство не есть переменная. Это два параллельных мира.
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

/* Свойстваи методы функции как объекта
? name 
- имя функции, также работает для методов объекта
? length
- количество параметров функции в её объявлении
Троеточие («остаточные параметры») не считается.
Если функция является анонимной, это свойство будет пустой строкой ("").
? toString()
- Метод, определённый в прототипе функций, 
возвращает строковое представление исходного кода функции.
? apply(), call(), bind()
- Методы, позволяющие управлять вызовом функции и устанавливать контекст this
(см ниже)
? prototype
Каждая функция (кроме стрелочных функций) автоматически получает свойство prototype, 
которое используется в контексте наследования.
Это объект, содержащий constructor и используется для определения свойств и методов, 
доступных объектам, созданным с помощью этой функции как конструктора. ???
? arguments
Указывает на объект arguments, который содержит массивоподобный список аргументов, 
переданных функции. Это  устаревшее свойство. Это псевдомассив.

*/
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

Оператор расширения ... позволяет передавать перебираемый ОБЪЕКТ args 
в виде списка в call.

? Перенаправление вызова call forwarding
Передача всех аргументов вместе с контекстом другой функции называется 
«перенаправлением вызова».
В основном переадресация вызова выполняется с помощью apply:

let wrapper = function(original, arguments) {
  return original.apply(this, arguments);
};
*/

/*
* Заимствование метода ========================================================
? [].join.call(arguments)
если arguments - псевдомассив, у которого нет метода join (это устаревшее свойство функции как объекта), 
можно позаимствовать этот метод у массива
Мы берём (заимствуем) метод join из обычного массива [].join. 
И используем [].join.call, чтобы выполнить его в контексте arguments.
this = arguments
*/
let worker = {
  slow(min, max) {
    console.log(`Called with ${min},${max}`);
    return min + max;
  },
};

function cachingDecorator(func, hash) {
  let cache = new Map();
  return function () {
    let key = hash(arguments); // (*)
    if (cache.has(key)) {
      return cache.get(key);
    }

    let result = func.call(this, ...arguments); // (**)

    cache.set(key, result);
    return result;
  };
}

function hash(args) {
  return [].join.call(args);
}

worker.slow = cachingDecorator(worker.slow, hash);

console.log(worker.slow(3, 5)); // работает
console.log("Again " + worker.slow(3, 5));
