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

function reverseInParens(str) {
  let temp = getStringLikeArray(str);
  let arr = JSON.parse(temp);

  return arr;
}

let test = "one (two (three (five)) four six)"; //[one,[two,[three],four]]
// console.log(getStringLikeArray(test));
console.log(reverseInParens(test));
