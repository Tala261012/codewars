function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

let generator = generateSequence();

let one = generator.next();
console.log(one); // {value: 1, done: false}

let two = generator.next();
console.log(two); // {value: 1, done: false}

let three = generator.next();
console.log(three); // {value: 1, done: false}

let four = generator.next();
console.log(four); // {value: 1, done: false}
