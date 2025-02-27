/*
* Генераторы
Генераторы могут порождать (yield) множество значений одно за другим, 
по мере необходимости. Генераторы отлично работают с перебираемыми объектами 
и позволяют легко создавать потоки данных.
*/

function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}
let generator = generateSequence();

let one = generator.next();

alert(JSON.stringify(one)); // {value: 1, done: false}
/*
Когда такая функция вызвана, она не выполняет свой код. 
Она возвращает СПЕЦИАЛЬНЫЙ ОБЪЕКТ, так называемый «генератор», 
для управления её выполнением. Основной метод  - next(). 
При вызове он запускает выполнение кода до ближайшей инструкции yield <значение> 
(значение может отсутствовать, в этом случае оно undefined). 
По достижении yield выполнение функции приостанавливается, 
а соответствующее значение – возвращается во внешний код.
Результатом метода next() всегда является объект с двумя свойствами:
value: значение из yield.
done: true, если выполнение функции завершено, иначе false.
(см. выше)

Если вызвать генератор после того как он завершен (done: true),
ошибки не будет, будет возвращаться один и тот же объект { value: undefined, done: true }

*/
