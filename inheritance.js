// #1
/*В коде ниже класс Rabbit наследует Animal.

К сожалению, объект класса Rabbit не создаётся. Что не так? Исправьте ошибку.*/

class Animal {

  constructor(name) {
    this.name = name;
  }

}

class Rabbit extends Animal {
  constructor(name) {
    super(name);   // нужно вызывыть конструктор родительского класса, чтобы создался объект и this
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("Белый кролик"); 
alert(rabbit.name);

// #2
// У нас есть класс Clock. Сейчас он выводит время каждую секунду

class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}
/*Создайте новый класс ExtendedClock, который будет наследоваться от Clock и добавьте параметр precision – количество миллисекунд между «тиками». Установите значение в 1000 (1 секунда) по умолчанию.

Сохраните ваш код в файл extended-clock.js
Не изменяйте класс clock.js. Расширьте его.*/

class ExtendedClock extends Clock {
    constructor(options) {
      super(options);
      let { precision=1000 } = options;
      this.precision = precision;
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), this.precision);
    }
  };

  // не совсем поняла данное задание((

// #3
// Как мы уже знаем, все объекты наследуют от Object.prototype и имеют доступ к «общим» методам объекта, например hasOwnProperty.
//Пример:

class Rabbit {
  constructor(name) {
    this.name = name;
  }
}

let rabbit = new Rabbit("Rab");

// метод hasOwnProperty от Object.prototype
alert( rabbit.hasOwnProperty('name') ); // true

// Но что если мы явно напишем "class Rabbit extends Object" – тогда результат будет отличаться от обычного "class Rabbit"?

//В чем разница?

//Ниже пример кода с таким наследованием (почему он не работает? исправьте его):

class Rabbit extends Object {
  constructor(name) {
    super();
    this.name = name;
  }
}

let rabbit = new Rabbit("Кроль");

alert( rabbit.hasOwnProperty('name') ); // true

// не работает т.к. необходимо вызывать