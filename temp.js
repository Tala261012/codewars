// Reverse Inside Parentheses (Inside Parentheses)
function getStringLikeArray(str) {
  let temp = "[";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      temp += "[";
    } else if (str[i] === ")") {
      temp += "]";
    } else if (str[i] === " ") {
      temp += ",";
    } else {
      temp += str[i];
    }
  }
  temp += "]";
  temp = addQuotes(temp);

  return temp;
}

function addQuotes(str) {
  return str.replace(/([a-zA-Z0-9]+)/g, '"$1"');
}

function myReverse(item) {
  if (!Array.isArray(item)) {
    let word = item.split("").reverse().join("");
    console.log(word);

    return word;
  } else {
    let res = item.reverse().map((el) => myReverse(el));
    // console.log(result);

    return res;
  }
}

function reverseInParens(str) {
  let temp = getStringLikeArray(str);
  let arr = JSON.parse(temp);
  let result = [];

  for (let el of arr) {
    if (Array.isArray(el)) result.push(myReverse(el));
    else result.push(el);
  }

  return result;
}

let test = "one (two three (four (five)))";
// console.log(getStringLikeArray(test));
console.log(reverseInParens(test)); //[ 'one', [ 'two', [ 'three', [Array] ], 'four', 'six' ] ]
