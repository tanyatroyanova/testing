// №1
/* Напишите код, выполнив задание из каждого пункта отдельной строкой:

Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта.*/

let obj = {};

obj.name = "John";

obj.surname = "Smith";

obj.name = "Pete";

delete obj.name;

// №2
/*Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

Должно работать так:*/

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

function isEmpty(obj) {
    for (let key in obj) {
            return false;
        } 
    
    return true;
}

//№3
// Можно ли изменить объект, объявленный с помощью const? Как вы думаете?

const user = {
  name: "John"
};

// это будет работать?
user.name = "Pete"; // св-ва объекта объявленного через const можно изменять, поэтому этот код будет работать

// №4
// У нас есть объект, в котором хранятся зарплаты нашей команды:

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
 
/* Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390. 
  Если объект salaries пуст, то результат должен быть 0. */

  function sumOfSalaries(obj) {
      let sum = 0;
      for (let key in obj) {
          return sum += obj[key];
      }

      return sum = 0;
  }

// №5
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// Например:

// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// после вызова функции
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
/* Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

P.S. Используйте typeof для проверки, что значение свойства числовое.*/

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] !== "number") continue;
        
        obj[key] *= 2;
    }
}
