// создать функцию-генератор pseudoRandom(seed),
// которая получает seed и создаёт генератор с указанной формулой.
// next = previous * 16807 % 2147483647
function* pseudoRandom(seed) {
  let value = seed;
  while (true) {
    value = (value * 16807) % 2147483647;
    yield value;
  }
}

let generator = pseudoRandom(1);

console.log(generator.next().value); // 16807
console.log(generator.next().value); // 282475249
console.log(generator.next().value); // 1622650073
