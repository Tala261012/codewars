//* Map & Set
//* WeakMap & WeakSet
//* Map - коллекция ===================================================================
// пар "ключ-значение". Ключи ЛЮБОГО ТИПА, даже объекты в качестве ключа!
/*
? Методы и свойства
new Map() – создаёт коллекцию.
map.set(key, value) – записывает по ключу key значение value.
map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
map.delete(key) – удаляет элемент (пару «ключ/значение») по ключу key.
map.clear() – очищает коллекцию от всех элементов.
map.size – возвращает текущее количество элементов.
*/

let map = new Map();
map.set("1", "str1").set(1, "num1").set(true, "bool1");
console.log(map); // Map(3) { '1' => 'str1', 1 => 'num1', true => 'bool1' }

/*
? Перебор
map.keys() – возвращает итерируемый объект по ключам,
map.values() – возвращает итерируемый объект по значениям,
map.entries() – возвращает итерируемый объект по парам вида [ключ, значение], 
этот вариант используется по умолчанию в for..of.
*/

let recipeMap = new Map([
  ["огурец", 500],
  ["помидор", 350],
  ["лук", 50],
]);

// перебор по ключам (овощи)
for (let vegetable of recipeMap.keys()) {
  console.log(vegetable); // огурец, помидор, лук
}

// перебор по значениям (числа)
for (let amount of recipeMap.values()) {
  console.log(amount); // 500, 350, 50
}

// перебор по элементам в формате [ключ, значение]
for (let entry of recipeMap) {
  // то же самое, что и recipeMap.entries()
  console.log(entry); // огурец,500 (и так далее)
}

/*
? map.forEach  - как у массивов, value - первый аргумент
*/
recipeMap.forEach((value, key, map) => {
  console.log(`ключ: ${key} значение: ${value}`);
});

/*
? Object.entries(obj)    === Map из Object ===
получает объект и возвращает массив пар ключ-значение для него
Object.keys(obj)
Object.values(obj)
*/
let obj = {
  name: "John",
  age: 30,
  address: {
    city: "Kyiv",
    street: "Khreschatik",
  },
};

let map2 = new Map(Object.entries(obj));
console.log(map2); // Map(2) { 'name' => 'John', 'age' => 30, 'address' => { city: 'Kyiv', street: 'Khreschatik' }}

/*
? Object.fromEntries(arr)  === Object из Map ===
получив массив пар вида [ключ, значение], он создаёт из них объект
*/
let map3 = new Map();
map3.set("banana", 1);
map3.set("orange", 2);
map3.set("meat", 4);

let obj3 = Object.fromEntries(map3.entries());
console.log(obj3);

//* Set  - множество УНИКАЛЬНЫХ ===========================================================
/*
это особый вид коллекции: «множество» значений (без ключей), 
где каждое значение может появляться ТОЛЬКО ОДИН раз.

new Set(iterable) – создаёт Set, и если в качестве аргумента был предоставлен итерируемый объект 
		(обычно это массив), то копирует его значения в новый Set.
set.add(value) – добавляет значение (если оно уже есть, то ничего не делает), 
		возвращает тот же объект set.
set.delete(value) – удаляет значение, возвращает true, если value было в множестве 
		на момент вызова, иначе false.
set.has(value) – возвращает true, если значение присутствует в множестве, 
		иначе false.
set.clear() – удаляет все имеющиеся значения.
set.size – возвращает количество элементов в множестве.

for..of
? forEach((value, valueAgain, set) => {})
имеет 3 аргумента: значение value, потом снова то же самое значение valueAgain, 
и только потом целевой объект. Сделано для совместимости с Map

? Перебор
set.values() – возвращает перебираемый объект для значений,
set.keys() – то же самое, что и set.values(), присутствует для обратной совместимости с Map,
set.entries() – возвращает перебираемый объект для пар вида [ЗНАЧЕНИЕ, ЗНАЧЕНИЕ], 
		присутствует для обратной совместимости с Map.
*/
let john = { name: "John", age: 30 };
let pete = { name: "Pete", age: 45 };
let mary = { name: "Mary", age: 18 };

let set = new Set();
set.add(john).add(pete).add(mary);

console.log(set.entries());

//* WeakMap =========== не итерабельный ===============================================
/*
Первое его отличие от Map в том, что ключи в WeakMap ДОЛЖНЫ быть _объектами_, 
а не примитивными значениями
*/
let weakMap = new WeakMap();
let obj2 = { name: "John" };
weakMap.set(obj2, "ok");
console.log(weakMap.get(obj)); //ok
/*
Теперь, если мы используем объект в качестве ключа 
и если больше НЕТ ССЫЛОК на этот объект, то он будет УДАЛЕН  из памяти 
(и из объекта WeakMap!) автоматически.
*/
obj2 = null;
console.log(weakMap.get(obj2)); //undefined
/*
НЕ поддерживает перебор и методы keys(), values(), entries(), 
так что нет способа взять все ключи или значения из неё.

присутствуют ТОЛЬКО следующие методы:

? weakMap.get(key)
? weakMap.set(key, value)
? weakMap.delete(key)
? weakMap.has(key)

Нет возможности получить size, так как это WeakMap.
В основном, WeakMap используется в качестве дополнительного хранилища данных, для кеширования.
*/

//* WeakSet =========== не итерабельный ===============================================
/*
Аналогично Set, но добавлять можно только _объекты_ (не примитивные значения)
Объект присутствует в WeakSet только до тех пор, пока доступен где-то ещё.

Как и Set, она поддерживает 
? weakset.add(obj) 
? weakset.has(obj) 
? weakset.delete(obj)
но НЕ size, keys() и не является перебираемой
*/
