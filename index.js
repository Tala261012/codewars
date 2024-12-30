// Собственно Деление ==============================================================================
function devideStrings(delimoe, delitel) {
  const delimoeArr = deleteZeros(delimoe.split("").map((el) => +el));
  const delitelArr = deleteZeros(delitel.split("").map((el) => +el));

  if (!compareArrs(delimoeArr, delitelArr)) return 0; // если делимое меньше делителя, то 0.

  const result = [];
  let mainArr = getFirstArr(delimoeArr, delitelArr); // {resultArr, restArr}

  return mainArr;
}
//===================================================================================================

// Подбор числа ============================================
// возвращает {resultArr - результат умножения, num - множитель}
function findNumber(mainArr, delitelArr) {
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
function getFirstArr(delimoeArr, delitelArr) {
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

console.log(devideStrings("323555", "23"));
console.log(findNumber([1, 0, 0], [1, 1]));
