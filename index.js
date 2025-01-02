//Scramblies
/*
Завершите функцию scramble(str1, str2), которая возвращает true, 
если часть символов str1 можно переставить так, 
чтобы они соответствовали str2, в противном случае возвращает false.
*/
function scramble(str1, str2) {
  let box = createMap(str1);
  let goal = createMap(str2);

  for (let [key, value] of goal) {
    let boxValue = box.get(key);
    if (!boxValue) return false;
    if (boxValue - value < 0) return false;
  }

  return true;
}

function createMap(str) {
  let map = new Map();

  for (let char of str) {
    let value = map.get(char);
    if (value) {
      map.set(char, value + 1);
    } else {
      map.set(char, 1);
    }
  }

  return map;
}

let str1 = "ffkatas";
let str2 = "staa";

console.log(scramble(str1, str2));
