// Чему будут равны переменные a, b, c и d в примере ниже?

let a = 1, b = 1;

let c = ++a; 
let d = b++; 

//a=2; b=2; c=2; d=1

// Чему будут равны переменные a и x в примере ниже?

let a = 2;

let x = 1 + (a *= 2); 
 
// a=4; x=5

// Операторы сравнения
// Каким будет результат этих выражений?

5 > 4 // true
"ананас" > "яблоко" // false 
"2" > "12"  //true
undefined == null  // true (спец. правило языка)
undefined === null  //false
null == "\n0\n" //false
null === +"\n0\n" // false


// Взаимодействие: alert, prompt, confirm

let name = prompt("Как тебя зовут?",'');
alert(`Твое имя ${name}`);