function sum(a) {
  return function ss(b) {
    // if ()
    console.log(b);
    return a + b; // берёт "a" из внешнего лексического окружения
  };
}

console.log(sum(1)); // 3
