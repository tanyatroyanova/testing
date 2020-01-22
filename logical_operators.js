// #1
/* Что выведет код ниже?*/

alert(null || 2 || undefined); // 2 - первое истинное значение

// #2
// Что выведет код ниже?

alert(alert(1) || 2 || alert(3)); // 1 (т.к. alert выполнится), 2 - первое истинное

// #3
// Что выведет код ниже?

alert(1 && null && 2); // null - первое ложное значение

// #4
// Что выведет код ниже?

alert(alert(1) && alert(2)); // 1 - первое ложное,alert(1) возвращает undefined -> выполнится еще alert(undefined)

// #5
// Что выведет код ниже?

alert(null || 2 && 3 || 4); // 3 ;  сначала выполниться 2 && 3, которое вернет 3 т.к. оба значения истинны; после выполниться alert(3)

// #6
/* Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.

«Включительно» означает, что значение переменной age может быть равно 14 или 90.*/

if (age >= 14 && age <= 90);

// #7
/* Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.

Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора. */ 

if (age < 14 || age > 90);
if (!(age >= 14) && !(age <= 90));

// #8
/* Какие из перечисленных ниже alert выполнятся?

Какие конкретно значения будут результатами выражений в условиях if(...)?*/

if (-1 || 0) alert('first'); // выполниться; результат (-1 || 0)=-1 т.е истина
if (-1 && 0) alert('second'); // не выполниться; результат (-1 && 0)=0 т.е ложь
if (null || -1 && 1) alert('third'); // выполниться; сначала выполниться (-1 && 1)=1;затем (null || 1) = 1; результат в if(1) т.е истина

// #9
/* Напишите код, который будет спрашивать логин с помощью prompt.

Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

Пароль проверять так:

Если введён пароль «Я главный», то выводить «Здравствуйте!»,
Иначе – «Неверный пароль»,
При отмене – «Отменено».

Для решения используйте вложенные блоки if. Обращайте внимание на стиль и читаемость кода.

Подсказка: передача пустого ввода в приглашение prompt возвращает пустую строку ''. Нажатие клавиши Esc во время запроса возвращаетnull.
*/

let login = prompt('Введите логин: ', '');
let password;

if (login == 'Админ') {
    password = prompt('Введите пароль', '');
} else if(login == '' || login == null) {
    alert('Отменено');
} else {
    alert('Я вас не знаю');
}

if (password == '' || password == null) {
    alert('Отменено');
} else if (password == 'Я главный') {
    alert('Здравствуйте!');
} else {
    alert('Неверный пароль');
}
