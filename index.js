//? Быстрая сортировка, рекурсия, quick sort
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
