// Деление в столбик больших чисел (строк) =================

function getArrayFromString(str) {
  return str.split("").map((el) => +el);
}

function getStringFromArray(arr) {
  console.log("getStringFromArray START", arr);
  return arr.join("");
}

function checkZerosBefore(arr) {
  if (arr[0] === 0 && arr.length > 1) {
    arr.shift();
    checkZerosBefore(arr);
  }
  return arr;
}

function compareStrings(upperArr, lowerArr) {
  console.log("compareStrings START");

  const upper = getStringFromArray(upperArr);
  const lower = getStringFromArray(lowerArr);

  if (upper.length < lower.length) return false;
  else if (upper.length > lower.length) return true;
  else if (upper >= lower) return true;
  return false;
}

function getFirstArr(delimoe, delitel) {
  console.log("getFirstArr START");

  const result = delimoe.slice(0, delitel.length);
  const restOfArr = delimoe.slice(delitel.length);

  if (compareStrings(result, delitel)) {
    return { result, ostatok: restOfArr };
  } else {
    return {
      result: delimoe.slice(0, delitel.length + 1),
      ostatok: delimoe.slice(delitel.length + 1),
    };
  }
}

function getMainArr(tempArr, restOfArr) {
  const result = tempArr.concat(restOfArr.slice(0, 1));
  const ostatok = restOfArr.slice(1);

  if (ostatok.length !== 0) return { result, ostatok };
  else return { result, ostatok: [] };
}

function multiplyArr(strArr, multiplier) {
  console.log("multiplyArr START");

  if (multiplier === 0) return [0];

  let memory = 0;
  const result = [];

  const arr = strArr.reverse();

  for (let i = 0; i < arr.length; i++) {
    const res = arr[i] * multiplier + memory;
    result.push(res % 10);
    memory = ~~(res / 10);
  }

  if (memory > 0) result.push(memory);

  return result.reverse(); //возвращает массив
}

function findNumber(main, delitel) {
  if (!compareStrings(main, delitel)) {
    return { result: [0], num: 0 };
  }

  let last = [],
    resultArr = [];

  for (let i = 1; i <= 9; i++) {
    last = resultArr;
    resultArr = multiplyArr(delitel, i);

    if (compareStrings(main, resultArr) && i < 9) {
      continue;
    } else if (compareStrings(main, resultArr) && i === 9) {
      return { result: resultArr, num: i };
    } else {
      return { result: last, num: i - 1 };
    }
  }
}

function subtractArrs(upper, lower) {
  if (!compareStrings(upper, lower)) {
    return upper;
  }

  const dif = upper.length - lower.length;
  if (dif) {
    for (let i = 0; i < dif; i++) {
      lower.unshift(0);
    }
  }

  let memory = 0;
  const result = [];

  for (let i = upper.length - 1; i >= 0; i--) {
    upper[i] = upper[i] - memory;

    const num = upper[i] - lower[i];
    if (num >= 0) {
      result.unshift(num);
      memory = 0;
    } else {
      result.unshift(10 + num);
      memory = 1;
    }
  }

  return checkZerosBefore(result);
}

function devideStrings(delimoe, delitel) {
  const delimoeArr = checkZerosBefore(getArrayFromString(delimoe));
  const delitelArr = checkZerosBefore(getArrayFromString(delitel));

  if (!compareStrings(delimoeArr, delitelArr)) return [0]; // если делимое меньше делителя, то 0.

  const result = [];
  let mainArr = getFirstArr(delimoeArr, delitelArr);
  let subtract;

  for (let i = 0; i <= delimoeArr.length - delitelArr.length; i++) {
    const obj = findNumber(mainArr.result, delitel);

    result.push(obj.num); //найденное число, результат
    //obj.result - результат умножения на найденное число

    subtract = subtractArrs(mainArr.result, obj.result);

    if (mainArr.ostatok) {
      const newArr = getMainArr(subtract, mainArr.ostatok);
      mainArr = newArr;
    } else break;
  }

  return [result.join(""), subtract.toString()];
}

const delimoe = "20";
const delitel = "3";
console.log(devideStrings(delimoe, delitel));
