//* Date
/*
? new Date()
без аргументов - ткущая дата, время
? new Date(milliseconds)
Создать объект Date с временем, равным количеству миллисекунд 
(тысячная доля секунды), прошедших с 1 января 1970 года UTC+0.
Датам до 1 января 1970 будут соответствовать отрицательные таймстампы
? new Date(datestring)
это строка, из неё «прочитывается» дата
? new Date(year, month, date?, hours?, minutes?, seconds?, ms?)
- year должен состоять из четырёх цифр. Для совместимости 
также принимаются 2 цифры и рассматриваются как 19xx, 
к примеру, 98 здесь это тоже самое, что и 1998, но настоятельно рекомендуется 
всегда использовать 4 цифры.
- month начинается с 0 (январь) по 11 (декабрь).
- Параметр date здесь представляет собой день месяца. 
Если параметр не задан, то принимается значение 1.
Если параметры hours/minutes/seconds/ms отсутствуют, их значением становится 0.

ПОЛУЧЕНИЕ компонентов даты из объекта Date:
Все ниже перечисленные методы возвращают значения в соответствии 
с МЕСТНЫМ часовым поясом.
? .getFullYear()
? .getMonth()
- Получить месяц, от 0 до 11 !!!
? .getDate()
- Получить день месяца, от 1 до 31
? .getHours(), .getMinutes(), .getSeconds(), .getMilliseconds()

? .getDay()
- Вернуть день недели от 0 (воскресенье) до 6 (суббота).  !!!

UTC-варианты, возвращающие день, месяц, год для временной зоны UTC+0:
? .getUTCFullYear(), .getUTCMonth(), .getUTCDay(), .getUTCDate(), .getUTCHours(), getUTCMinutes(), .getUTCSeconds(), .getUTCMilliseconds()

? getTime()
Для заданной даты возвращает таймстамп – 
количество миллисекунд, прошедших с 1 января 1970 года UTC+0.
? getTimezoneOffset()
Возвращает разницу В МИНУТАХ между UTC и местным часовым поясом:
*/
let now = new Date();
console.log(now); //2025-01-05T16:40:07.526Z
let mlc = new Date("1917-01-26");
console.log(now.getTimezoneOffset()); // -120 для UTC+2
console.log(now.getTime()); // 1736097730345

/*
УСТАНОВКА компонентов даты
? .setFullYear(year, [month], [date])
? .setMonth(month, [date])
? .setDate(date)
? .setHours(hour, [min], [sec], [ms])
? .setMinutes(min, [sec], [ms])
? .setSeconds(sec, [ms])
? .setMilliseconds(ms)
? .setTime(milliseconds) 
- (устанавливает дату в виде целого количества миллисекунд, прошедших с 01.01.1970 UTC)
У всех этих методов, кроме setTime(), есть UTC-вариант, например: setUTCHours().
*/

// Автоисправление, само все правильно размазывает
let first_march = new Date(2024, 2, 1); // 1 марта 2024
first_march.setDate(first_march.getDate() + 50); // +50 дней
console.log(first_march); // 19 апреля 2024

let noww = new Date();
noww.setDate(noww.getDate() - 10);
console.log(noww);
