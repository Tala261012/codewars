//? Рекурсия, сумма всех элементов массива

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
