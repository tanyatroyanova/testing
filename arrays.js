// #1
/* Что выведет следующий код?*/

let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
alert( fruits.length ); // 4
// тоже самое будет в массивах shoppingCart и fruits, т.к. оба ссылаются на один и тот же объект

// #2
/* Давайте произведём 5 операций с массивом.

Создайте массив styles с элементами «Джаз» и «Блюз».
Добавьте «Рок-н-ролл» в конец.
Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте «Рэп» и «Регги» в начало массива.
Массив по ходу выполнения операций:

Джаз, Блюз
Джаз, Блюз, Рок-н-ролл
Джаз, Классика, Рок-н-ролл
Классика, Рок-н-ролл
Рэп, Регги, Классика, Рок-н-ролл */

let styles = ["Джаз", "Блюз"];

styles.push("Рок-н-ролл"); // styles = ["Джаз", "Блюз", "Рок-н-ролл"];

let centerValue = Math.floor(styles.length/2); // centerValue = 2;
styles[centerValue] = "Классика"; // styles = ["Джаз", "Классика", "Рок-н-ролл"];

alert(styles[0]);
styles.shift(); // styles = ["Классика", "Рок-н-ролл"];

styles.unshift("Рэп"); // styles = ["Рэп", "Классика", "Рок-н-ролл"];
styles.unshift("Регги"); // styles = ["Регги", "Рэп", "Классика", "Рок-н-ролл"];

// #3
/* Каков результат? Почему?*/

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2](); // выполнится alert( this )- выведется "a", "b", "function() { alert( this ); }"

// #4
/* Напишите функцию sumInput(), которая:

Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».*/

function sumInput() {
    let arr = [];

    while (true) {
        value = prompt("Введите значения:", "");

        if (value != null && value !="" && isFinite(value)) {
            arr.push(+value);
        } else {
            break;
        }        
    }
    let sum = 0;
    for (let i of arr) {
        sum += i;
    }
    return sum;
}

// #5
/* На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

Функция getMaxSubSum(arr) должна возвращать эту сумму.

Например:
                             
getMaxSubSum([-1, 2, 3, -9]) = 5 (сумма выделенных)
getMaxSubSum([2, -1, 2, 3, -9]) = 6
getMaxSubSum([-1, 2, 3, -9, 11]) = 11
getMaxSubSum([-2, -1, 1, 2]) = 3
getMaxSubSum([100, -9, 2, -3, 5]) = 100
getMaxSubSum([1, 2, 3]) = 6 (берём все)

Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:
getMaxSubSum([-1, -2, -3]) = 0

Попробуйте придумать быстрое решение: O(n2), а лучше за О(n) операций.*/

function getMaxSubSum(arr) {
    let sum = 0;
    
    for (let i = 0; i <= arr.length; i++) {
        let sum2 = 0;
        for (let j = i; j <= arr.length; j++) {
            sum2 += arr[j];
            if (sum2 > sum) {
                sum = sum2;
            }
        }  
    }
    return sum;
}

// 1. Перебор массива с выводом в консоль кажого элемента

function pereborMassiva(arr) {
    for (let i of arr) {
        console.log(i);
    }
}

// 2. Перобразовать массив в строку и обртано в массив 

function preobrazovMassiva(arr) {
    let string = "";
    
    for (let i of arr) {
        string += i;
    }
    alert(string);
    
    let arr2 = [];

    for (let i = 0; i <= string.length; i++) {
        arr2[i] = string[i];
    }
    alert(arr2);

}

// 3. Добавить к каждому элементу массива слова hello 

function addHello(arr) {
    for (let i = 0; i <= arr.length-1; i++) {
        arr[i] += "hello";
    }
    return arr;
}

// 4. Преобразовать числовой массив в boolean

function makeArrayBoolean(arr) {
    for (let i = 0; i <= arr.length-1; i++) {
        if (arr[i] === 0) {
            arr[i] = "false";
        } else {
            arr[i] = "true";
        }
    }
    return arr;
}
