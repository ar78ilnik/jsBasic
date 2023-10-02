// 3.9 Стандарт ES6. Интерполяция

let name = "Ivan",
    age = 30,
    mail = "ex@mail.ru";

document.write('Пользователю ' + name + ' ' + age + ' лет. Его почтовый адрес: ' + mail);

// С помощью интерполяции можно создать такую строку более изящно

document.write(`Пользователю ${name} ${age} лет. Его почтовый адрес: ${mail}`);

//https://habr.com/ru/articles/305900/
//https://cheatography.com/romansemko/cheat-sheets/ecmascript-6-es6/pdf_bw/

// 3.10 let and const

function makeArray() {
    var items = [];

    for (let i = 0; i < 10; i++) {
        var item = function () {
            console.log(i);
        };

        items.push(item);
    }

    return items;
}

var arr = makeArray();

arr[1]();
arr[4]();
arr[8]();

//Переменная, созданная с помощью var используется во всем цикле. Если создать с помощью let, то она локальная, строка 21

// Стрелочные функции

let fun = () => {
    console.log(this);
};

//fun();

// Стрелочные функции анонимны. Ее можно присвоить переменной и потом вызвать. Не имеет своего контекста вызова

let obj = {
    number: 5,
    sayNumber: function () {
        let say = () => {
            console.log(this);
        };
        say();
    }
}

obj.sayNumber();

// 3.13 Классы

class Rectangle {
    constructor(height, width = 20) {
        this.height = height;
        this.width = width;
    }
    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(4);

console.log(square.calcArea());

//http://jsraccoon.ru/es6-classes
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes

// 3.14 Spread-операторы

//Разворачивает массив и превращает в набор данных

let video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wp', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'fb'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

let numbrs = [2, 5, 7];

log(...numbrs);

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
