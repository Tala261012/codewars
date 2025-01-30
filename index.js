/*
Результат декоратора debounce(f, ms) – это обёртка, которая откладывает вызовы f, 
пока не пройдёт ms миллисекунд бездействия (без вызовов, «cooldown period»), 
а затем вызывает f один раз с ПОСЛЕДНИМИ аргументами.
*/
function debounce(func, ms) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, arguments), ms);
  };
}

// почти то же самое
function debounce2(func, ms) {
  let timeout;
  return function (x) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.call(this, x), ms);
  };
}

let f = debounce(console.log, 1000);
f("a");
setTimeout(() => f("b"), 200);
setTimeout(() => f("c"), 500);
