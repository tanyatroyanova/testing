// #1
// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
// Для вывода используйте alert.

let date = new Date(2012, 1, 20, 3, 12);
alert(date);

// #2
// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

//Например:

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getWeekDay(date) );        // нужно вывести "ВТ"

function getWeekDay(date) {
    let weekDay = date.getDay();
    switch (weekDay) {
        case 0: 
            return "ВС";
            break;
        case 1: 
            return "ПН";
            break;
        case 2: 
            return "ВТ";
            break;
        case 3: 
            return "СР";
            break;
        case 4: 
            return "ЧТ";
            break;
        case 5: 
            return "ПТ";
            break;
        case 6: 
            return "СБ";
            break;
    }
}

// #3
/* В Европейских странах неделя начинается с понедельника (день номер 1),
затем идёт вторник (номер 2) и так до воскресенья (номер 7). Напишите функцию getLocalDay(date),
которая возвращает «европейский» день недели для даты date.*/

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getLocalDay(date) );       // вторник, нужно показать 2

function getLocalDay(date) {
    let weekDayEU = date.getDay();
    switch (weekDayEU ) {
        case 0: 
            return 7;
            break;
        case 1: 
            return 1;
            break;
        case 2: 
            return 2;
            break;
        case 3: 
            return 3;
            break;
        case 4: 
            return 4;
            break;
        case 5: 
            return 5;
            break;
        case 6: 
            return 6;
            break;
    } 
}

// #4

/* Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.
К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.
Функция должна надёжно работать при значении days=365 и больших значениях:*/

let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
// P.S. Функция не должна изменять переданный ей объект date.

function getDateAgo(date, days) {
    let day = new Date(date);
    day.setDate(day.getDate() - days);
    return day.getDate();
}

// #5
/* Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.

Параметры:

year – год из четырёх цифр, например, 2012.
month – месяц от 0 до 11.
К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).*/

function getLastDayOfMonth(year, month) {
    let nextMonth = month + 1;
    let date = new Date(year, nextMonth, 1);
    
    date.setDate(date.getDate() - 1);
   
    return date.getDate();
}

// #6
/* Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.
Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:*/

getSecondsToday() == 36000 // (3600 * 10)

//Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

function getSecondsToday() {
    let toDay = new Date();
    
    return (toDay.getHours() * 3600 + toDay.getMinutes() * 60 + toDay.getSeconds());
}

// #7
/* Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.
Например, если сейчас 23:00, то:*/

getSecondsToTomorrow() == 3600

//P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

function getSecondsToTomorrow() {
    let date = new Date();
    let secondsInOneDay = 24 * 3600;
    let remainSeconds = secondsInOneDay - (date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds());

    return remainSeconds; 
}

// #8
/* Напишите функцию formatDate(date), форматирующую date по следующему принципу:

Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
В противном случае, если меньше часа, вывести "m мин. назад".
В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
Например: */

alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );

function formatDate(date) {
    let currentDate = new Date();
    let passedSeconds = (currentDate - date) / 1000;
    let passedMinutes = (currentDate - date) / 1000 / 60;
    let result;

    let day = "0" + date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear().toString().slice(-2);
    let hour = "0" + date.getHours();
    let min = "0" + date.getMinutes();

    (date.getDate() < 10) ? day = "0" + date.getDate() : day = date.getDate();
    (date.getMonth() + 1 < 10) ? month = "0" + (date.getMonth() + 1) : month = date.getMonth() + 1;
    (date.getHours() < 10) ? hour = "0" + date.getHours() : hour = date.getHours();
    (date.getMinutes() < 10) ? min = "0" + date.getMinutes() : min = date.getMinutes();

    if (passedSeconds < 1) {
        result = "прямо сейчас"; 
    } else if (passedMinutes < 1) {
        result = `${passedSeconds} сек. назад`; 
    } else if (passedMinutes >= 1 && passedMinutes < 60) {
        result = `${passedMinutes} мин. назад`; 
    } else {
        result = `${day}.${month}.${year} ${hour}:${min}`;
    }

    return result;
}
