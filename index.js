// Есть «обычная» функция.
// Как можно внутри неё получить результат выполнения async–функции?
async function wait() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return 10;
}
// ответ
function f() {
  wait().then((result) => console.log(result));
}
f();
