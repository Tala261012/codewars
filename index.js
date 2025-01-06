function skobki(str) {
  const arr = str.split("").map((el) => (el === "(" ? -1 : 1));

  if (arr[0] === 1) arr.unshift(-1);
  if (arr[arr.length - 1] === -1) arr.push(1);

  let beginStr = "";
  let endStr = "";

  arr.reduce((acc, el) => {
    acc += el;
    if (el === -1) acc = -1;
    if (acc > 0) beginStr += "(";

    return acc;
  }, 0);

  arr.reduce((acc, el) => {
    acc += el;
    if (el === 1) acc = 1;
    if (acc < 0) endStr += ")";

    return acc;
  }, 1);

  return beginStr + arr.map((el) => (el === -1 ? "(" : ")")).join("") + endStr;
}

//let skob = ")))))))))))))))))";
let skob = ")))(()())))))))))))))))";
let myRes = "((((((((((((((( (( () ))( ()() ) )))))))))))))))";
let meRes = "(((((((((( (( () ))( ()() ) ))))))))))";
let res = skobki(skob);
console.log(res);
console.log(meRes === res);
// (((((((((((((()))(()())))))))))))))))
//
