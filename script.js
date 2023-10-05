// 4.1 Promise

// Если произошло что-то, то мы обещаем что выполним действие. Если происходит событие клика, то должно произойти другое действие. Для этого мы используем колбэки.

// Пример

//let btn = addEventListener('click', function () {
//    console.log('Done...');
//});
//
//// Часто можно встретить много действий, и нужно написать много функций обратного действия и тогда код становится не читаемым. 
//
//let func1 = function (param, func2) {
//    func2(function (param, func3) {
//        func3(function (param, func4) {
//            func4(function (param, func5) {
//                //...
//            })
//        })
//    })
//}
//
//// Пока первая функция выполняется, вся конструкция находится в ожидании (pending). Как пример, опишем выстрел из лука.
//
//function shoot(arrow, headshot, fail) {
//    console.log('Высделали выстрел...');
//
//    setTimeout(function () {
//        Math.random() > .5 ? headshot({}) : fail('Вы промахнулись');
//    }, 3000);
//};
//
//function win() {
//    console.log('Вы попедили');
//}
//
//function loose() {
//    console.log('Вы проиграли');
//}
//
//shoot({}, function (mark) {
//    win();
//}, function (miss) {
//    loose();
//});

// Данная структура может разрастаться. Переписываем функцию с помощью промесов


function shoot(arrow) {
    console.log('Высделали выстрел...');
    let promise = new Promise(function (resolve, reject) {
        // resolve - обещание выполнилось
        // reject - обещание не выполнилось
        setTimeout(function () {
            Math.random() > .5 ? resolve({}) : reject('Вы промахнулись');
        }, 1000);
    });
    return promise;
};

function win() {
    console.log('Вы попедили');
}

function loose() {
    console.log('Вы проиграли');
}

//shoot({}, function (mark) {
//    win();
//}, function (miss) {
//    loose();
//});

// Это была первая часть как создать промис

shoot({}).then(win).catch(loose);
