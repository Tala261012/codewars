/* Тормозящий (throttling) декоратор
Создайте «тормозящий» декоратор throttle(f, ms), который возвращает обёртку.
При многократном вызове он передает вызов f не чаще одного раза в ms миллисекунд.
*/
function throttle(func, ms) {
  let isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper() {
    if (isThrottled) {
      // (2)
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments); // (1)

    isThrottled = true;

    setTimeout(function () {
      isThrottled = false; // (3)
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}

function f(a) {
  console.log(a);
}

let f1000 = throttle(f, 1000);
f1000(1);
f1000(2);
f1000(3);
