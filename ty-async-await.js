/* 
* new Promise
– это специальный объект в JavaScript, 
который связывает «создающий» и «потребляющий» коды вместе. 

let promise = new Promise(function(resolve, reject) {
...
});

Анонимная функция называется исполнитель (executor), запускается автоматически сразу же.
Её аргументы resolve и reject – это колбэки, которые предоставляет сам JavaScript. 
Наш код – только внутри исполнителя.
Когда получен результат, он должен вызвать или resolve(value) (value - результат),
или reject(error) (error - объект ошибки)

У объекта promise, возвращаемого конструктором new Promise, есть внутренние свойства:
? state («состояние») 
вначале "pending" («ожидание»), 
потом меняется на "fulfilled" («выполнено успешно») при вызове resolve 
или на "rejected" («выполнено с ошибкой») при вызове reject.
? result («результат») 
вначале undefined, 
далее изменяется на value при вызове resolve(value) 
или на error при вызове reject(error).

Состояние промиса может быть изменено только один раз (или resolve, или reject).

resolve/reject ожидает только один аргумент (или ни одного)

? .then
promise.then(
  function(result) {} // обработает успешное выполнение ,
  function(error) {} // обработает ошибку 
);
? .catch
.catch(f) это то же самое, что promise.then(null, f)
? .finally
— не имеет аргументов, 
— не предназначен для обработки результата промиса,
— не должен ничего возвращать (будет проигнорировано)
Единственным исключением из этого является случай, когда обработчик finally выдает ошибку

new Promise((resolve, reject) => {
	сделать что-то, что займёт время, и после вызвать resolve или может reject 
})
	выполнится, когда промис завершится, независимо от того, успешно или нет
  .finally(() => остановить индикатор загрузки)
  таким образом, индикатор загрузки всегда останавливается, прежде чем мы продолжим
  .then(result => показать результат, err => показать ошибку)
*/
function loadScript(src) {
  return new Promise(function (resolve, reject) {
    let script = document.createElement("script");
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));

    document.head.append(script);
  });
}

// Применение:
let promise = loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"
);

promise.then(
  (script) => alert(`${script.src} загружен!`),
  (error) => alert(`Ошибка: ${error.message}`)
);

promise.then((script) => alert("Ещё один обработчик..."));

/*
? Цепочка вызовов .then
вызов promise.then тоже возвращает промис, 
так что мы можем вызвать на нём следующий .then

можно в .then также возвращать промис - получится цепочка асинхронных действий.
return new Promise(resolve, reject) => {}

.then также перехватывает ошибки, если задан второй аргумент 
(который является обработчиком ошибок). См. пример ниже (*)

? catch
Строки кода (*)
promise.then(f1).catch(f2); (1)
и 
promise.then(f1, f2); (2)
НЕ эквивалентны - если ошибка произойдёт в f1 (1), то она будет обработана в .catch
.then передаёт результат или ошибку следующему блоку .then/catch

Мы можем иметь столько обработчиков .then, сколько мы хотим, 
и затем использовать один .catch в конце, чтобы перехватить ошибки из всех обработчиков.

.catch перехватывает все виды ошибок в промисах: 
будь то вызов reject() или ошибка, брошенная в обработчике при помощи throw.

? unhandledrejection
В браузере - гобальная ошибка. Это событие является частью стандарта HTML.
Если происходит ошибка, и отсутствует её обработчик, то генерируется событие unhandledrejection, 
и соответствующий объект event содержит информацию об ошибке.
*/
window.addEventListener("unhandledrejection", function (event) {
  // объект события имеет два специальных свойства:
  alert(event.promise); // [object Promise] - промис, который сгенерировал ошибку
  alert(event.reason); // Error: Ошибка! - объект ошибки, которая не была обработана
});

new Promise(function () {
  throw new Error("Ошибка!");
}); // нет обработчика ошибок
