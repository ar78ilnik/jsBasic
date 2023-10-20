//function User(name, age) {
//    this.name = name;
//    this.age = age;
//
//    this.say = function () {
//        console.log(`Имя пользователя ${this.name} и возраст ${this.age}`);
//    }
//}

////let ivan = new User("Alex", 25);
//console.log(ivan.name); // Ivan
//console.log(ivan.age); // 25
//
////ivan.name = Alex;
////ivan.age = 30;
//
//console.log(ivan.name); // Alex
//console.log(ivan.age); // 30

// Получается, что пользователь может изменить объект. Чтобы этого не произошло, нужно внутри объекта объявить переменную

//function User(name, age) {
//    this.name = name;
//    // this.age = age;
//    let userAge = age;
//
//    this.say = function () {
//        console.log(`Имя пользователя ${this.name} и возраст ${this.age}`);
//    }
//}
//
//ivan.name = Alex;
//ivan.userAge = 30;
//
//console.log(ivan.name); // Alex
//console.log(ivan.age); // undefined

// Используются такие понятия как gettory и settory. Это методы нашего объекта, которые позволяют получать и изменять данные объекта. Они делают объект более безопасным.

//function User(name, age) {
//    let userName, userAge;
//
//    this.getName = function () {
//        return userName;
//    }
//
//    this.setName = function (name) {
//        userName = name;
//    }
//
//    this.getAge = function () { // геттер
//        return userAge;
//    }
//
//    this.setAge = function (age) { // сеттер
//        userAge = age;
//    }
//
//    this.say = function () {
//        console.log(`Имя пользователя ${this.getName()} и возраст ${this.getAge()}`);
//    }
//}
//
//let ivan = new User("Ivan", 25);
//
//ivan.setAge(35);
//ivan.setName("Alex");
//ivan.say();

// Создаем модуль

//let number = 1;
//
//(function () {
//    let number = 2;
//    console.log(number);
//    return console.log(number + 3);
//}())
//
//console.log(number);

// Второй способ - использование объектного интерфейса. Наш модуль записываем в переменную и в нем возращаем методы, которые будут доступны снаружи

//let user = (function () {
//    let privat = function () {
//        console.log('I am privat');
//    }
//
//    return {
//        sayHello: function () {
//            console.log('Hello');
//        }
//    }
//}())
//
//console.log(user);
//console.log(user.sayHello());

// Третий метод

let user = (function () {
    let privat = function () {
        console.log('I am privat');
    }

    let sayHello = function () {
        console.log('Hello');
    }

    return {
        privat: privat()
    }
}())

console.log(user.privat);
