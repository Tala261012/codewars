// Деление в столбик больших чисел (строк) =================

function getArrayFromString(str) {
  return str.split("").map((el) => +el);
}

function getStringFromArray(arr) {
  return arr.join("");
}

function checkZerosBefore(arr) {
  if (arr[0] === 0 && arr.length > 1) {
    arr.shift();
    checkZerosBefore(arr);
  }
  return arr;
}

function compareStrings(upper, lower) {
  const upperArr = checkZerosBefore(getArrayFromString(upper));
  upper = getStringFromArray(upperArr);

  const lowerArr = checkZerosBefore(getArrayFromString(lower));
  lower = getStringFromArray(lowerArr);

  if (upper.length < lower.length) return false;
  else if (upper.length > lower.length) return true;
  else if (upper >= lower) return true;
  return false;
}

function getFirstString(delimoe, delitel) {
  const result = delimoe.slice(0, delitel.length);
  const restOfString = delimoe.slice(delitel.length);

  if (compareStrings(result, delitel)) {
    return { result, ostatok: restOfString };
  } else {
    return {
      result: delimoe.slice(0, delitel.length + 1),
      ostatok: delimoe.slice(delitel.length + 1),
    };
  }
}

function getMainStr(tempString, restOfString) {
  const result = tempString + restOfString.slice(0, 1);
  const ostatok = restOfString.slice(1);

  if (ostatok.length !== 0) return { result, ostatok };
  else return { result, ostatok: "" };
}

function multiplyStr(str, multiplier) {
  if (multiplier === 0) return "0";

  let memory = 0;
  const result = [];

  const arr = checkZerosBefore(getArrayFromString(str)).reverse();

  for (let i = 0; i < arr.length; i++) {
    const res = arr[i] * multiplier + memory;
    result.push(res % 10);
    memory = ~~(res / 10);
  }

  if (memory > 0) result.push(memory);

  return result.reverse().join(""); //возвращает строку
}

function findNumber(main, delitel) {
  if (!compareStrings(main, delitel)) {
    return { result: "0", num: 0 };
  }

  let last = "",
    resultStr = "";

  for (let i = 1; i <= 9; i++) {
    last = resultStr;
    resultStr = multiplyStr(delitel, i);

    if (compareStrings(main, resultStr) && i < 9) {
      continue;
    } else if (compareStrings(main, resultStr) && i === 9) {
      return { result: resultStr, num: i };
    } else {
      return { result: last, num: i - 1 };
    }
  }
}

function subtractStrings(upper, lower) {
  if (!compareStrings(upper, lower)) {
    return upper;
  }

  const upperArr = checkZerosBefore(getArrayFromString(upper));
  const lowerArr = checkZerosBefore(getArrayFromString(lower));

  const dif = upperArr.length - lowerArr.length;
  if (dif) {
    for (let i = 0; i < dif; i++) {
      lowerArr.unshift(0);
    }
  }

  let memory = 0;
  const result = [];

  for (let i = upperArr.length - 1; i >= 0; i--) {
    upperArr[i] = upperArr[i] - memory;

    const num = upperArr[i] - lowerArr[i];
    if (num >= 0) {
      result.unshift(num);
      memory = 0;
    } else {
      result.unshift(10 + num);
      memory = 1;
    }
  }

  return checkZerosBefore(result).join("");
}

function devideStrings(delimoe, delitel) {
  if (!compareStrings(delimoe, delitel)) return 0; // если делимое меньше делителя, то 0.

  const result = [];
  let mainStr = getFirstString(delimoe, delitel);
  let subtract;

  for (let i = 0; i <= delimoe.length - delitel.length; i++) {
    const obj = findNumber(mainStr.result, delitel);

    result.push(obj.num); //найденное число, результат
    //obj.result - результат умножения на найденное число

    subtract = subtractStrings(mainStr.result, obj.result);

    if (mainStr.ostatok) {
      const newStr = getMainStr(subtract, mainStr.ostatok);
      mainStr = newStr;
    } else break;
  }

  return [result.join(""), subtract.toString()];
}

const delimoe = "20";
const delitel = "3";
console.log(devideStrings(delimoe, delitel));
