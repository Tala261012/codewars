//* WeakMap =========== не итерабельный ===============================================
/*
Первое его отличие от Map в том, что ключи в WeakMap ДОЛЖНЫ быть _объектами_, 
а не примитивными значениями
*/
let weakMap = new WeakMap();
let obj = { name: "John" };
weakMap.set(obj, "ok");
console.log(weakMap.get(obj)); //ok
/*
Теперь, если мы используем объект в качестве ключа 
и если больше НЕТ ССЫЛОК на этот объект, то он будет УДАЛЕН  из памяти 
(и из объекта WeakMap!) автоматически.
*/
obj = null;
console.log(weakMap.get(obj)); //undefined
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
