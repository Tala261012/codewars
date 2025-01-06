//Долго, зато моё =================================================================
// function testIt(sum, n, ts) {
//   const resArr = [];
//   const a = [];
//   let temp = null,
//     res = null;

//   if (n > ts.length) return null;
//   if (n === ts.length) {
//     let s = ts.reduce((ac, el) => (ac += el));
//     if (s <= sum) return s;
//   }

//   for (let i = 0; i < n; i++) {
//     resArr.push(i);
//     const tmp = [];

//     for (let j = 0; j < ts.length; j++) {
//       tmp.push(ts[j]);
//     }
//     resArr[i] = [...tmp];
//   }

//   rek(0, n, [], null);

//   function rek(x, n, arr, ind) {
//     for (let i = 0; i < ts.length; i++) {
//       if (i === ind) break;
//       if (x === n - 1) {
//         arr.push(resArr[x][i]);

//         //========================================================
//         temp = arr.reduce((ac, elem) => (ac += elem), 0);
//         if (temp <= sum) {
//           a.push(temp);
//         }
//         //========================================================

//         arr.pop();
//       } else {
//         arr.push(resArr[x][i]);
//         rek(x + 1, n, arr, i);
//         arr.pop();
//       }
//     }
//   }

//   console.log(a);
//   if (a.length > 1) res = Math.max(...a);
//   if (a.length === 1 && a[0]) res = a[0];
//   return res;
// }

// console.log("=>", testIt(230, 3, [91, 74, 73, 85, 73, 81, 87]));

// console.log(moveIt(["a2", "a3", "a5"]));

//Числа Хаминга ====================================================================
// function hamming(n) {
//   var arr = [1];
//   var i2 = 0,
//     i3 = 0,
//     i5 = 0;
//   for (var i = 1; i < n; i++) {
//     var x = Math.min(2 * arr[i2], 3 * arr[i3], 5 * arr[i5]);
//     arr.push(x);
//     if (2 * arr[i2] <= x) i2++;
//     if (5 * arr[i5] <= x) i5++;
//     if (3 * arr[i3] <= x) i3++;
//   }
//   return arr[n - 1];
// }

// console.log("=>", hamming(1931));
//====================================================================================

//Следующее меньшее ==================================================================
// function nextSmaller(n) {
//   const str = String(n);

//   function check(num) {
//     let s = str;

//     const arrS = String(num).split("");

//     for (let i of arrS) {
//       let ind = s.indexOf(i);
//       if (ind === -1) {
//         return false;
//       } else {
//         s = s.slice(0, ind) + s.slice(ind + 1);
//       }
//     }
//     if (s.length === 0) return true;
//   }

//   for (let i = n - 1; i >= 0; i--) {
//     if (check(i)) return i;
//     if (str.length > String(i).length) return -1;
//   }
//   return -1;
// }

// console.log(nextSmaller(1234567908));
// function nextSmaller(n) {
//   const str = n.toString();

//   function moveIt(arr, n) {
//     let result = 0;

//     function permute(current, remaining) {
//       if (remaining.length === 0) {
//         const num = Number(current.join(""));
//         if (num < n && num > result) result = num;
//         return;
//       }

//       for (let i = 0; i < remaining.length; i++) {
//         const newCurrent = current.concat(remaining[i]);
//         const newRemaining = remaining
//           .slice(0, i)
//           .concat(remaining.slice(i + 1));
//         permute(newCurrent, newRemaining);
//       }
//     }

//     permute([], arr);

//     return result;
//   }

//   for (let i = str.length - 2; i >= 0; i--) {
//     const checkStr = str.slice(i);
//     let temp = moveIt(checkStr.split(""), Number(checkStr));

//     console.log(temp);

//     if (temp !== 0 && String(temp).length === checkStr.length) {
//       return Number(str.slice(0, i) + String(temp));
//     }
//   }

//   return -1;
// }
// console.log(nextSmaller(90));
//====================================================================================

//Перестановка со скобками ===========================================================
// function balancedParens(n) {
//   let all = [];
//   let parens = function (left, right, str) {
//     // if no more brackets can be added then add the final balanced string
//     if (left === 0 && right === 0) {
//       all.push(str);
//     }

//     // if we have a left bracket left we add it
//     if (left > 0) {
//       parens(left - 1, right + 1, str + "(");
//     }

//     // if we have a right bracket left we add it
//     if (right > 0) {
//       parens(left, right - 1, str + ")");
//     }
//   };
//   parens(n, 0, "");
//   return all;
// }
// console.log(balancedParens(3));
//====================================================================================

//слолжение в столбик ====================================================================================
// const pin = (a, b) => {
//   a.length > b.length
//     ? (b = b.padStart(a.length, "0"))
//     : (a = a.padStart(b.length, "0"));

//   let memory = 0;
//   const result = [];
//   const aar = a.split("").map((el) => (el = Number(el)));
//   const bar = b.split("").map((el) => (el = Number(el)));

//   for (let i = a.length - 1; i >= 0; i--) {
//     const sum = aar[i] + bar[i] + memory;
//     sum < 10 ? result.unshift(sum) : result.unshift(sum - 10);
//     sum < 10 ? (memory = 0) : (memory = 1);
//   }

//   if (memory === 1) result.unshift(1);

//   return result.join("");
// };
//====================================================================================

//Сравнение структур двух массивов====================================================
// const cleanArr = (a) => {
//   const str = JSON.stringify(a)
//     .split("")
//     .filter((el) => el === "[" || el === "]" || el === ",")
//     .join("");
//   return str;
// };

// const delStrings = (a) => {
//   return a.map((el, i, ar) => (typeof el === "string" ? ar[i] === null : el));
// };

// Array.prototype.sameStructureAs = function (other) {
//   if (!Array.isArray(other) || !Array.isArray(this)) return false;

//   const otherArr = delStrings(other);
//   const otherStr = cleanArr(otherArr);

//   console.log(otherStr);

//   const thisArr = delStrings(this);
//   const thisStr = cleanArr(thisArr);

//   console.log(thisStr);

//   return otherStr === thisStr;
// };

// console.log([].sameStructureAs(1));

//====================================================================================

//Быстрая сортировка (книга) =========================================================
// const sortIt = (arr) => {
//   if (arr.length < 2) {
//     return arr;
//   } else {
//     let start = arr[Math.floor(arr.length / 2)];

//     const lessArr = [];
//     const greaterArr = [];

//     for (let i of arr) {
//       if (i < start) lessArr.push(i);
//       if (i > start) greaterArr.push(i);
//     }
//     console.log(start);
//     console.log(lessArr);
//     console.log(greaterArr);

//     const result = [].concat(sortIt(lessArr), start, sortIt(greaterArr));
//     return result;
//   }
// };

// console.log(sortIt([5, 2, 4, 3, 8, 0, 6]));
//====================================================================================

//Слудующее простое число - мое ====================================================================================
// class Primes {
//   static *stream() {
//     for (let i = 2; ; i++) {
//       if (this.check(i)) {
//         console.log(i);
//         yield i;
//       }
//     }
//   }

//   static check = (number) => {
//     if (number <= 3) {
//       return true;
//     }
//     if (number % 2 === 0 || number % 3 === 0) {
//       return false;
//     }

//     let i = 5;

//     while (i * i <= number) {
//       if (number % i === 0 || number % (i + 2) === 0) {
//         return false;
//       }
//       i += 6;
//     }

//     return true;
//   };
// }

// const numbers = (n) => {
//   const str = Primes.stream();

//   for (let i = 2; i <= n; i++) {
//     str.next().value;
//   }
// };

// numbers(10000);

//Слудующее простое число - гениальное ====================================================================================
// class Primes {
//   static *stream() {
//     yield 2;
//     var n = 3;
//     while (true) {
//       if (isPrime(n)) {
//         yield n;
//       }
//       n += 2;
//     }
//   }
// }

// function isPrime(n) {
//   for (var a = 3; a <= ~~Math.sqrt(n); a += 2) {
//     if (n % a == 0) return false;
//   }
//   return true;
// }
//====================================================================================

//Список дубликатов ==================================================================
// function findSecretMessage(paragraph) {
//   let str = "";

//   // Вместо этого должно быть элегантное регулярное выражение
//	 //const str2 = paragraph.toLowerCase().match(/[a-z]+/g); - возвращает массив
// 	for (let ch of paragraph.toLowerCase()) {
//     if (
//       ch === "." ||
//       ch === "," ||
//       ch === "!" ||
//       ch === "?" ||
//       ch === ";" ||
//       ch === ":" ||
//       ch === "$" ||
//       ch === "#" ||
//       ch === "@" ||
//       ch === "%" ||
//       ch === "^" ||
//       ch === "&" ||
//       ch === "*" ||
//       ch === "(" ||
//       ch === ")" ||
//       ch === "/" ||
//       ch === "+" ||
//       ch === "-" ||
//       ch === "="
//     ) {
//       continue;
//     }
//     str += ch;
//   }

//   const arr = str.split(" ");

//   let result = [];
//   let set = new Set();
//   let dupes = new Set();

//   for (let item of arr) {
//     if (set.has(item)) {
//       dupes.add(item);
//     } else {
//       set.add(item);
//     }
//   }

//   if (dupes.size === 0) return "";

//   return Array.from(dupes.values()).join(" ");
// }

// let paragraph = "zxcv asdf is qwer asdf qwer qwer qwer is";
// console.log(findSecretMessage(paragraph)); // asdf qwer is
//====================================================================================

//Scramblies Анаграмма ===============================================================
/*
Завершите функцию scramble(str1, str2), которая возвращает true, 
если часть символов str1 можно переставить так, 
чтобы они соответствовали str2, в противном случае возвращает false.
*/
// function scramble(str1, str2) {
//   let box = createMap(str1);
//   let goal = createMap(str2);

//   for (let [key, value] of goal) {
//     let boxValue = box.get(key);
//     if (!boxValue) return false;
//     if (boxValue - value < 0) return false;
//   }

//   return true;
// }

// function createMap(str) {
//   let map = new Map();

//   for (let char of str) {
//     let value = map.get(char);
//     if (value) {
//       map.set(char, value + 1);
//     } else {
//       map.set(char, 1);
//     }
//   }

//   return map;
// }

// let str1 = "ffkatas";
// let str2 = "staa";

// console.log(scramble(str1, str2));
//====================================================================================

// работает неправильно
function skobki(str) {
  const arr = str.split("").map((el) => (el === "(" ? -1 : 1));

  if (arr[0] === 1) arr.unshift(-1);
  if (arr[arr.length - 1] === -1) arr.push(1);

  let beginStr = "";
  let endStr = "";

  arr.reduce((acc, el) => {
    acc += el;
    if (el === -1) acc = -1;
    if (acc > 0) beginStr += "(";

    return acc;
  }, 0);

  arr.reduce((acc, el) => {
    acc += el;
    if (el === 1) acc = 1;
    if (acc < 0) endStr += ")";

    return acc;
  }, 1);

  return beginStr + arr.map((el) => (el === -1 ? "(" : ")")).join("") + endStr;
}

let skob = ")))(()())))))))))))))))";
let meRes = "(((((((((((((()))(()())))))))))))))))";
let res = skobki(skob);
console.log(res);
console.log(meRes === res);
// (((((((((((((()))(()())))))))))))))))
//
