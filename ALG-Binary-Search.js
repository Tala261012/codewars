//? Бинарный поиск binary search, моя версия ===================================
// получает н входе отсортированный список
// low, high - границы (индексы), в которых проводится поиск
// mid - среднее, для сокращения диапазона в 2 раза

const arr = [];
// заполняем массив от start до end
function fillArray(arr, start, end) {
  for (let index = 0; start <= end; index++) {
    arr[index] = start++;
  }
  console.log(arr);
  return arr;
}

function binarySearch(arr, item) {
  let low = 0;
  let high = arr.length - 1;
  let mid; // индекс в средине массива
  let guess; // переменная для сравнения с искомым числом item

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    guess = arr[mid];

    if (guess === item) {
      return { mid, guess };
    }

    if (guess < item) {
      low = ++mid;
    } else {
      high = --mid;
    }
  }

  return "not found";
}

fillArray(arr, 50, 500);
console.log(binarySearch(arr, 50));
// =============================================================================
