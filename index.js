let user = {
  name: "Kate",
  age: 90,
};
delete user?.street;
console.log(user);

console.log(user?.admin);
