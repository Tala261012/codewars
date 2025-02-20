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
