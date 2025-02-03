let user = {};

Object.defineProperties(user, {
  name: { value: "John", writable: false },
  surname: { value: "Smith", writable: false },
  // ...
});

let desc = Object.getOwnPropertyDescriptors(user);
console.log(desc);
