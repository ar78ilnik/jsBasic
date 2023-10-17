// Работа с сохранением данных без БД. Данные сохранятся если мы перезагрузим страницу или даже закроем браузер. Эта технология называется localStorage. Это встроенный в браузер объект, который может хранить различные данные. По сути это свойство глобального объекта Window. Где его можно найти. Преходим во вкладку Application. Вкладка Storage. Можно увидеть два поля: ключ(key) и значение(value). Зачем вообще нужно? Например, человек делает настройки сайта и при повторном входе все должно оставаться на местах. Или установить данные формы, или установить время. В него помещается около 5 мб памяти.

// Чтобы записать в объект

//localStorage.setItem("number", 1);
//
//// Если такое поле уже существует, то значение перезапишется. Чтобы получить значение этого ключа, используется команда getItem
//
//console.log(localStorage.getItem("number"));
//
////Удаляем ключ
//
//localStorage.removeItem("number");
//console.log(localStorage.getItem("number"), "2");
//
//// Чтобы очистить все хранилище
//
//localStorage.clear();

// Есть небольшая форма, потренируемся использовать localStorage. Необходимо, чтобы когда пользователь нажал чекбокс, она у него оставалась активной. При клике на чекбокс, в localStorage будет записываться определенное значение.

// Также есть кнопка changeForm


window.addEventListener('DOMContentLoaded', function () {
    let checkbox = document.getElementById('rememberMe'),
        change = document.getElementById('change'),
        form = document.getElementsByTagName('form');

    if (localStorage.getItem("isChecked") === true) {
        checkbox.checked = true;
    }

    if (localStorage.getItem("bg") === "changed") {
        form.style.backgroundColor = 'aqua';
    }

    checkbox.addEventListener('click', function () {
        localStorage.setItem("isChecked", true);
    });

    change.addEventListener('click', function () {
        localStorage.setItem("bg", 'changed');
        form.style.backgroundColor = 'aqua';
    });

});

// localStorage привязывается к определенному домену и его нельзя использовать на другом

// Если нужно записать объект, например 

let persone = {
    name: "Alex",
    age: 25,
    tech: ["mobile", "notebook"]
}

// методами, описанными выше, так нельзя. Поэтому нужно сделать "сериализацию данных".

let serializedPerson = JSON.stringify(persone);
localStorage.setItem("Alex", serializedPerson);
JSON.parse(localStorage.getItem("Alex"));
