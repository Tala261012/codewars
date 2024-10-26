//? Сортировка выбором, обычная
// медленно работает О(n в квадрате)
// находим наибольший элемент в массиве, помещаем его в новый массив, удаляем из старого
// начинаем с начала

function findMaxNumber(arr) {
  let maxNum = arr[0];
  let index = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
      index = i;
    }
  }

  return index;
}

function sortArray(arr) {
  const resultArr = [];

  while (arr.length >= 1) {
    const index = findMaxNumber(arr);
    resultArr.push(arr[index]);

    arr.splice(index, 1);
  }

  return resultArr;
}

console.log(sortArray([1, 4, 12, 99, 0, 100]));
// =============================================================================
