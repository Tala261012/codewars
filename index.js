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

console.log(slow);
