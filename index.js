//* Рекурсия, задачи ======================================================
/*
Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
1. С использованием цикла.
2. Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
3. С использованием формулы арифметической прогрессии.
*/
function sumToCycle(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}
// console.log(sumToCycle(100)); //5050

function sumToRec(n) {
  if (n === 1) return n;
  else {
    return n + sumToRec(n - 1);
  }
}
// console.log(sumToRec(100)); //5050

function sumToArifm(n) {
  return ((1 + n) * n) / 2;
}
// console.log(sumToArifm(100)); //5050
// =======================================================================

// Вычислить факториал ===================================================
function factorial(n) {
  return n != 1 ? n * factorial(n - 1) : 1;
}
// console.log(factorial(5));
// =======================================================================

// Числа Фибоначчи, динамическое программирование снизу вверх.
function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}
// Числа Фибоначчи, рекурсия (очень долго)
function fib2(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
// =======================================================================

// выводит элементы связанного списка по одному ==========================
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};
// рекурсия
function printList(list) {
  console.log(list.value);
  if (list.next) printList(list.next);
}
// цикл
function printListCycle(list) {
  let tmp = list;

  while (tmp) {
    console.log(tmp.value);
    tmp = tmp.next;
  }
}
// printList(list);
// printListCycle(list);

// вывод в обратном порядке
function printReverseList(list) {
  if (list.next) {
    printReverseList(list.next);
  }

  console.log(list.value);
}
// printReverseList(list);
// =======================================================================
