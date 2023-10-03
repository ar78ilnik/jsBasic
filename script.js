// 4.1 JSON

//Формат обмена данными. Это набор пар "ключ: значение". Все строки должны быть в двойных кавычках.

//let options = {
//    width: 1366,
//    height: 768,
//    background: 'red',
//    font: {
//        size: '16',
//        color: '#fff'
//    }
//};

//Если мы хотим отправить этот объект на сервер, нам нужно перевести его в JSON формат. У JSON для этого есть два метода: 
// stringify - преобразует объект в JSON
// parse преобразует JSON в объект

//let options = {
//    width: 1366,
//    height: 768,
//    background: 'red',
//    font: {
//        size: '16',
//        color: '#fff'
//    }
//};
//
//console.log(JSON.stringify(options)); //{"width":1366,"height":768,"background":"red","font":{"size":"16","color":"#fff"}}

// здесь JSON это встроенный объект в JS

// 4.2 AJAX

let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    // input, чтобы прика ждом нажатии применялся обработчик валюты
    let request = new XMLHttpRequest();
    // создаем объект XMLHttpRequest и помещаем в переменную для удобства. Это главный объект для работы с запросами. У него есть свои свойства и методы.
    //request.open(method, url, async, login, pass);
    // Метод open() производит настройку AJAX-запроса. Этот метод может принимать 5 различных аргументов.
    // 1 - method, метод по которому общаются клиент и сервер (GET и POST)
    // 2 - URL - путь к серверу
    // 3 - отвечает за асинхронность запроса
    // 4 - login
    // 5 - pass

    request.open('GET', 'curren.json');
    // клиент обращается к серверу по протоколу HTTP. Запросы HTTP также состоят из head и body
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    // настройка запроса
    request.send();
    //открывает соединение и отправляет запрос на сервер. Как пример - отправка формы обратной связи на сервер
    // Это были методы. Свойства бывают - 

    // status - содержит http-код ответа сервера, например 404
    // statusText - ok или not found / response
    // responseText - текст ответа сервера, по аналогии с магазин это те товары, которые можно купить
    // readyState - текущее состояние запроса

    request.addEventListener('readystatechange', function () {
        if (request.readyState === 4 && request.status === 200) {
            let data = JSON.parse(request.response);

            inputUsd.value = inputRub.value / data.usd;
        } else {
            inputUsd.value = "Is wrong...";
        }
    });
});

// https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest
//https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
//https://developer.mozilla.org/ru/docs/Web/API/FormData/Using_FormData_Objects
//https://ilikekillnerds.com/2017/09/convert-formdata-json-object/
//https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BA%D0%B8_HTTP
