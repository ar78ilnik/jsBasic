//function User(name, id) {
//    this.name = name;
//    this.id = id;
//    this.human = true;
//    this.hello = function () {
//        console.log('hello ' + this.name);
//    }
//}

// Свойство prototype позволяет добавлять новые методы в наш конструктор и они будут наследоваться у потомков.
//User.prototype.exit = function (name) {
//    console.log('User ' + this.name + ' have been exit');
//}

//let ivan = new User('Ivan', 5),
//    alex = new User('Alex', 20);

//console.log(ivan);
//console.log(alex);

//ivan.exit();

//В стандарте ES6

//class User {
//    constructor(name, id) {
//        this.name = name;
//        this.id = id;
//        this.human = true;
//    }
//    hello() {
//        console.log(`Hello ${this.name}`);
//    }
//    exit(name) {
//        console.log(`User ${this.name} have been exit`);
//    }
//}
//
//let ivan = new User('Ivan', 5),
//    alex = new User('Alex', 20);
//
//console.log(ivan);
//console.log(alex);
//
//ivan.hello();
//alex.hello();

// Функции вызываются 4 способами и в каждом контекст вызова будет отличатся

//function showThis() {
//    console.log(this);
//}
//
//showThis();

// 1) В случае простого вызова функции, this это объект. Он определяется средой исполнения и в браузере это объект Window. Функция showThis ни к чему не привязана и она не знает в каком контексте ей исполнятся

//'use strict';
//
//function showThis(a, b) {
//    console.log(this);
//
//    function sum() {
//        console.log(this);
//        return a + b;
//    }
//    console.log(sum());
//}
//
//showThis(4, 3);

// Функция внутри функции своим контекстом все равно считает Window. Чтобы посчитать правильно нашу функцию, нужно сделать замыкание функции. Если функция не находит в себе переметров a и b, то она ищет их вне себя. Нужно убрать слово this из суммы, чтобы функция смогла искать параметры вне себя. В новом стандарте, функции, заключенные в 'use strict', если без контекста выдают undefined вместо Window.

// 2) 

//let obj = {
//    a: 20,
//    b: 15,
//    sum: function () {
//        console.log(this);
//    }
//}
//
//obj.sum();

// Когда функция является методом объекта, контекст выполнения это и есть сам объект

//3) 

//class User {
//    constructor(name, id) {
//        this.name = name;
//        this.id = id;
//        this.human = true;
//    }
//    hello() {
//        console.log(`Hello ${this.name}`);
//    }
//    exit(name) {
//        console.log(`User ${this.name} have been exit`);
//    }
//}
//
//let ivan = new User('Ivan', 5),
//    alex = new User('Alex', 20);

// В конструкторе (new) контекстом вызова будет созданный объект

// 4) 

//let user = {
//    name: "John"
//}
//
//function sayName(surname) {
//    console.log("this:", this);
//    console.log(this.name + surname);
//}

// Сейчас эти две функции никак не связаны. Нужно насильно связать эти функции.

//console.log(sayName.call(user, 'Tim'));
//console.log(sayName.apply(user, ['Smith']));

//с помощью функции call мы связываем функцию sayName и объект user. Теперь контекст вызова будет тот, который мы указали (объект user), а не Window. Если наша функция sayName получит еще один аргумент, surname, то имя мы получаем из объекта, то фамилию мы получаем вручную. Разница между call и apply в аргументах. В call передается строка, в apply передается массив

// Как контекст вызова работает в DOM

let btn = document.querySelector('.box');
btn.addEventListener('click', function () {
    console.log(this);
    this.style.backgroundColor = 'aqua';
});

// если в обработчиках событий мы используем контекст вызова и использование вызова обычной функции, то наш контекст вызова и есть тот элемент, на котором применяется событие
