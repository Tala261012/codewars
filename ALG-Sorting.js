//? Сортировка выбором, обычная, selection sort
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

function selectionSort(arr) {
  const resultArr = [];

  while (arr.length >= 1) {
    const index = findMaxNumber(arr);
    resultArr.push(arr[index]);

    arr.splice(index, 1);
  }

  return resultArr;
}

console.log(selectionSort([1, 4, 12, 99, 0, 100]));
// =============================================================================

//? Рекурсия, сумма всех элементов массива =====================================

const myArr = [1, 5, 12, 99, 0, 100]; //216

function summArr(arr) {
  // if (arr.length === 0) return 0; // базовый случай, не обязательный
  if (arr.length === 1) return arr[0]; // базовый случай
  else {
    const temp = arr.splice(0, 1);
    const sum = temp[0] + summArr(arr);
    return sum;
  }
}

console.log(summArr(myArr));
// =============================================================================

//? Быстрая сортировка, рекурсия, quick sort ===================================
// значительные затраты памяти на стек вызовов
// когда в рекурсивной функции задействован массив, то базовый случай - это
// пустой массив или массив из одного элемента

//выбираем опорный элемент и находим элементы больше и меньше него

const arrForSorting = [17, 23, 0, 16, 98, 55, 4, 77, -1];

// сортировка по возрастанию
function quickSort(arr) {
  if (arr.length < 2) return arr;
  else {
    const base = arr[0]; //опорный элемент
    const less = arr.filter((el) => el < base); // меньшие
    const greater = arr.filter((el) => el > base); // большие

    return quickSort(less).concat(arr[0], quickSort(greater)); // быстрая сортировка
  }
}

console.log(quickSort(arrForSorting));
// =============================================================================
