//* Object

/*
? Object.assign(target, src1, ..., srcN)
- копирует свойства и методы объектов src1, ..., srcN в target
- возвращает новый объект
- если названия свойств совпадают - они перезаписываются
- символьные свойства также копируются
*/

/* 
? Object.keys(obj) 
– возвращает массив ключей. Без символьных свойств.
? Object.values(obj) 
– возвращает массив значений. Без символьных свойств.
? Object.entries(obj) 
– возвращает массив пар [ключ, значение]. Без символьных свойств.
? Object.fromEntries(arr) 
- получив массив пар вида [ключ, значение], он создаёт из них объект

? for..in
- Без символьных свойств.

? Object.getOwnPropertySymbols(obj)
– с его помощью можно получить все свойства объекта с ключами-символами (только с ключами-символами).
Также существует метод
? Reflect.ownKeys(obj),
который возвращает все ключи объекта, включая символьные. Так что они не совсем спрятаны.
*/

/*
? .hasOwnProperty(prop)
- имеет ли объект свойство prop
- true/false
- видит символьные свойства
? Object.is(obj1.prop, obj2.prop)
- проверка на строгое равенство между двумя значениями
- true/false
- видит символьные свойства
*/
