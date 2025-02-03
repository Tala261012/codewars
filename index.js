let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },
};

console.log(user.fullName); // John Smith
user.fullName = "Ivan Petrov";
console.log(user.name); // Ivan
console.log(user.surname); // Petrov
