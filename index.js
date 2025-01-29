/*
* Заимствование метода
? [].join.call(arguments)
если arguments - псевдомассив (у которого нет метода join), 
можно позаимствовать этот метод у массива
Мы берём (заимствуем) метод join из обычного массива [].join. 
И используем [].join.call, чтобы выполнить его в контексте arguments.
this = arguments
*/
let worker = {
  slow(...nums) {
    console.log(`Called with ${nums}`);
    return nums.reduce((sum, el) => (sum += el), 0);
  },
};

function cachingDecorator(func, hash) {
  let cache = new Map();
  return function () {
    let key = hash(arguments);
    if (cache.has(key)) {
      return cache.get(key);
    }

    let result = func.call(this, ...arguments);

    cache.set(key, result);
    return result;
  };
}

function hash(args) {
  return [].join.call(args); // (*)
}

worker.slow = cachingDecorator(worker.slow, hash);

console.log(worker.slow(3, 5)); // работает
console.log("Again " + worker.slow(3, 5));

console.log(worker.slow(2, 5, 3));
