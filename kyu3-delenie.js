// 3 kyu
// Divide integers as strings

// Собственно Деление ==============================================================================
function divideStrings(delimoe, delitel) {
  const delimoeArr = deleteZeros(delimoe.split("").map((el) => +el));
  const delitelArr = deleteZeros(delitel.split("").map((el) => +el));

  if (!delimoeArr.length || !delitelArr.length) return ["0", "0"];

  if (!compareArrs(delimoeArr, delitelArr)) return ["0", delimoe]; // если делимое меньше делителя, то 0.

  const result = [];
  let ostatok;
  let mainObj = getFirstObj(delimoeArr, delitelArr); // {resultArr, restArr} первый подмассив и оставшееся

  do {
    let multiplyedObj = findNumber(mainObj.resultArr, delitelArr);
    //{resultArr - результат умножения, num - множитель}

    result.push(multiplyedObj.num);

    console.log("delitelArr", delitelArr);

    let subtractedArr = subtractArrs(
      mainObj.resultArr,
      multiplyedObj.resultArr
    );

    if (mainObj.restArr.length) {
      let tempObj = getTempObj(subtractedArr, mainObj.restArr);
      mainObj = tempObj;
    } else {
      if (subtractedArr.length) ostatok = subtractedArr.join("");
      else ostatok = "0";

      break;
    }
  } while (true);

  return [result.join(""), ostatok];
}
//===================================================================================================

// получить след объект с массивом для деления =============
// возвращает {resultArr, restArr}
function getTempObj([...subtractedArr], [...restArr]) {
  subtractedArr.push(restArr[0]);
  restArr.shift();

  return { resultArr: subtractedArr, restArr };
}
//==========================================================

// Вычитание массивов ======================================
// возвращает массив
function subtractArrs([...upperArr], [...lowerArr]) {
  // для ускорения, чтоб не делать unshift
  upperArr.reverse();
  lowerArr.reverse();

  // разница длинн
  let lengthDifference = upperArr.length - lowerArr.length;

  //заполнение нулями
  if (lengthDifference > 0) {
    for (let i = 0; i < lengthDifference; i++) {
      lowerArr.push(0);
    }
  }

  const result = [];
  let memory = 0;

  for (let i = 0; i < upperArr.length; i++) {
    upperArr[i] -= memory;

    let num = upperArr[i] - lowerArr[i];

    if (num >= 0) {
      result.push(num);
      memory = 0;
    } else {
      result.push(10 + num);
      memory = 1;
    }
  }

  result.reverse();
  deleteZeros(result); //если получились нули в начале

  return result;
}

//==========================================================

// Подбор числа ============================================
// возвращает {resultArr - результат умножения, num - множитель}
function findNumber(mainArr, delitelArr) {
  if (!compareArrs(mainArr, delitelArr)) {
    return { resultArr: [0], num: 0 };
  }

  let prevResult = [];
  let tempResult = [...delitelArr];

  for (let i = 2; i <= 9; i++) {
    prevResult = [...tempResult];
    tempResult = multiplyArrs(delitelArr, i);

    if (compareArrs(mainArr, tempResult) && i < 9) {
      continue;
    } else if (compareArrs(mainArr, tempResult) && i === 9) {
      return { resultArr: tempResult, num: 9 };
    } else {
      return { resultArr: prevResult, num: i - 1 };
    }
  }
}
//==========================================================

// Умножение в столбик на одну цифру =======================
// возвращает массив
function multiplyArrs(delitelArr, i) {
  let memory = 0;
  const result = [];
  const arr = [...delitelArr].reverse();

  for (let j = 0; j < arr.length; j++) {
    const res = arr[j] * i + memory;
    result.push(res % 10);
    memory = ~~(res / 10);
  }

  if (memory > 0) result.push(memory);

  return result.reverse();
}
//==========================================================

//Получить ПЕРВУЮ основную строку ==========================
function getFirstObj(delimoeArr, delitelArr) {
  const resultArr = delimoeArr.slice(0, delitelArr.length);
  const restArr = delimoeArr.slice(delitelArr.length);

  if (compareArrs(resultArr, delitelArr)) {
    return { resultArr, restArr };
  } else {
    return {
      resultArr: delimoeArr.slice(0, delitelArr.length + 1),
      restArr: delimoeArr.slice(delitelArr.length + 1),
    };
  }
}
//==========================================================

//Сравнение строк ==========================================
function compareArrs(upperArr, lowerArr) {
  if (upperArr.length < lowerArr.length) return false;
  else if (upperArr.length > lowerArr.length) return true;
  else if (upperArr.join("") >= lowerArr.join("")) return true;
  else return false;
}
//==========================================================

// Очищает от нулей в начале ===============================
function deleteZeros(arr) {
  if (arr[0] === 0) {
    arr.shift();
    deleteZeros(arr);
  }

  return arr;
}
//==========================================================

console.log(divideStrings("4", "5"));
//===================================================================================================
