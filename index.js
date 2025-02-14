let json = '{ "age": 30 }'; // данные неполны

try {
  let user = JSON.parse(json); // <-- выполнится без ошибок

  if (!user.name) {
    throw new SyntaxError("Данные неполны: нет имени"); // (*)
  }

  console.log(user.name);
} catch (e) {
  console.log("JSON Error: " + e.message); // JSON Error: Данные неполны: нет имени
}
