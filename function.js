// #1
/* Следующая функция возвращает true, если параметр age больше 18.
В ином случае она запрашивает подтверждение через confirm и возвращает его результат:
*/
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Родители разрешили?');
  }
}
//Будет ли эта функция работать как-то иначе, если убрать else?

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Родители разрешили?');
}

// Обе функции работают одинаково, т.к. после первого return функция завершит свое выполнение

// #2
/* Следующая функция возвращает true, если параметр age больше 18.

В ином случае она задаёт вопрос confirm и возвращает его результат.
*/
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}
/* Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.

Сделайте два варианта функции checkAge:
*/
// Используя оператор ?
function checkAge(age) {
    let result;
    age > 18 ? result = true : result = confirm('Родители разрешили?');
    return result
  }

// Используя оператор ||
function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
}

// #3
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
/*
Пример вызовов:

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
*/

function min(a, b) {
    return  a < b ? a : b; 
}

// #4
/* Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).
P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.*/

function pow(x, n) {
    let a = x;
    for (let i = 2; i <= n ; i++) {
        x*= a;        
    }
    return x;
}

let x = prompt('Введите х', '');
let n = prompt('Введите n', '');

if (n < 1) {
    alert('Допустимы только натуральные значения n!')
} else {
    alert(pow(x, n));
}

//Замените код Function Expression стрелочной функцией:
/*
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);*/

//Решение
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

let yes = () => alert("Вы согласились.");
let no = () => alert("Вы отменили выполнение.");

ask("Вы согласны?", yes, no);
