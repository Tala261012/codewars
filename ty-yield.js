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

? for..of
Генераторы являются перебираемыми объектами.
for(let value of generator) {
  alert(value); // 1, затем 2
}
Значение 3 выведено не будет!
Перебор через for..of игнорирует последнее значение, при котором done: true

Именно return устанавливает done: true

Если мы хотим, чтобы были все значения при переборе через for..of, 
то надо возвращать их через yield.

? ...
Так как генераторы являются перебираемыми объектами, мы можем использовать 
всю связанную с ними функциональность, например оператор расширения ...

let seq = [0, ...generateSequence()];
console.log(seq); //[ 0, 1, 2, 3 ]

? function* f(…) или function *f(…)
оба синтаксиса корректны.
*/
let range = {
  from: 1,
  to: 5,

  *[Symbol.iterator]() {
    // краткая запись для [Symbol.iterator]: function*()
    for (let value = this.from; value <= this.to; value++) {
      yield value;
    }
  },
};

console.log([...range]); // 1,2,3,4,5
/*
Генераторы были добавлены в язык JavaScript
с целью упростить создание перебираемых объектов.

Прежний вариант перебираемого объекта:
let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    return {
      current: this.from,
      last: this.to,

      next() {
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  }
};

? yield*
Позволяет «вкладывать» генераторы один в другой 
Директива yield* делегирует выполнение другому генератору
Внутри генератора вызываем другой генератор
*/
function* generateSequence2(start, end) {
  for (let i = start; i <= end; i++) yield i;
}
function* generatePasswordCodes() {
  // 0..9
  yield* generateSequence2(48, 57);
  // A..Z
  yield* generateSequence2(65, 90);
  // a..z
  yield* generateSequence2(97, 122);
}

let str = "";

for (let code of generatePasswordCodes()) {
  str += String.fromCharCode(code);
}
console.log(str);
// 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz
// ==============================================================================

//? yield может передавать значение ИЗВНЕ ВОВНУТРЬ, в генератор.

function* gen() {
  // Передаём вопрос во внешний код и ожидаем ответа
  let result = yield "2 + 2 = ?"; // (*)
  alert(result);
}

let generator2 = gen();
let question = generator2.next().value; // <-- yield возвращает значение
generator2.next(4); // --> передаём результат в генератор
/*
1. Первый вызов generator.next() – всегда без аргумента, 
он начинает выполнение и возвращает результат первого yield "2+2=?". 
На этой точке генератор приостанавливает выполнение.
2. Затем результат yield переходит во внешний код в переменную question.
3. При generator.next(4) выполнение генератора возобновляется, 
а 4 выходит из присваивания как результат: let result = 4.

Каждый next(value) передаёт в генератор значение, 
которое становится результатом текущего yield, 
возобновляет выполнение и получает выражение из следующего yield.

? generator.throw
Инициироавание ошибки */

function* gen() {
  try {
    let result = yield "2 + 2 = ?"; // (1)

    alert(
      "Выполнение программы не дойдёт до этой строки, потому что выше возникнет исключение"
    );
  } catch (e) {
    alert(e); // покажет ошибку
  }
}

let generator3 = gen();
let question2 = generator3.next().value;
generator3.throw(new Error("Ответ не найден в моей базе данных")); // (2)
/*
Ошибка, которая проброшена в генератор на строке (2), 
приводит к исключению на строке (1) с yield. 
В примере выше try..catch перехватывает её и отображает.

? generator.return(100)
Досрочное завершение работы генератора ИЗВНЕ со значением 100
Будет возвращен объект {value: 100, done: true}
Дальнейшие yield не будут выполнены.
*/

/*
* Асинхронные итераторы и генераторы ============================================
Используется Symbol.asyncIterator вместо Symbol.iterator.
next() должен возвращать промис.
Чтобы перебрать такой объект, используется цикл for await (let item of iterable).
? for await (let item of iterable)
*/
let range2 = {
  from: 1,
  to: 5,

  // for await..of вызывает этот метод один раз в самом начале
  [Symbol.asyncIterator]() {
    // (1)
    // ...возвращает объект-итератор:
    // далее for await..of работает только с этим объектом,
    // запрашивая у него следующие значения вызовом next()
    return {
      current: this.from,
      last: this.to,

      // next() вызывается на каждой итерации цикла for await..of
      async next() {
        // (2)
        // должен возвращать значение как объект {done:.., value :...}
        // (автоматически оборачивается в промис с помощью async)

        // можно использовать await внутри для асинхронности:
        await new Promise((resolve) => setTimeout(resolve, 1000)); // (3)

        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      },
    };
  },
};

(async () => {
  for await (let value of range2) {
    // (4)
    alert(value); // 1,2,3,4,5
  }
})();

//? Асинхронный генератор =======================================================
async function* generateSequence3(start, end) {
  for (let i = start; i <= end; i++) {
    // ура, можно использовать await!
    await new Promise((resolve) => setTimeout(resolve, 1000));

    yield i;
  }
}

(async () => {
  let generator = generateSequence3(1, 5);
  for await (let value of generator) {
    alert(value); // 1, потом 2, потом 3, потом 4, потом 5
  }
})();

//? Асинхронно перебираемый объект ==============================================
let range3 = {
  from: 1,
  to: 5,

  async *[Symbol.asyncIterator]() {
    // то же, что и [Symbol.asyncIterator]: async function*()
    for (let value = this.from; value <= this.to; value++) {
      // пауза между значениями, ожидание
      await new Promise((resolve) => setTimeout(resolve, 1000));

      yield value;
    }
  },
};

(async () => {
  for await (let value of range3) {
    alert(value); // 1, потом 2, потом 3, потом 4, потом 5
  }
})();

// пример
// https://learn.javascript.ru/async-iterators-generators#primer-iz-realnoy-praktiki
