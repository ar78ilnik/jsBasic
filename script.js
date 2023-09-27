// window - окно, где показывается документ. Оно включает в себя панель с вкладками, плагины установленные в браузер и т.д.
// screen - весь монитор. На эти параметры мы не можем повлиять

//В js пиксели пишутся без единиц измерения

// Как получить размеры элемента

// Все эти параметры доступны только для чтения

//clientWidth - ширина элемента без полос прокрутки и без бордера. Включает паддинги

//let box = document.querySelector('.box');
//let width = box.clientWidth,
//    height = box.clientHeight;

//console.log(width, height);

// Если нужно получить размеры с бордером и полосой прокрутки, нужно использовать offsetWidth и offsetHeight

//let box = document.querySelector('.box');
//let width = box.offsetWidth,
//    height = box.offsetHeight;

//console.log(width, height);

//Если нужно посмотреть всю прокрутку, то используется scrollWidth и scrollHeight

//let box = document.querySelector('.box'),
//    btn = document.querySelector('button');
//let width = box.scrollWidth,
//    height = box.scrollHeight;

//console.log(width, height);

//btn.addEventListener('click', function () {
//    box.style.height = box.scrollHeight + 'px';
//});

// Для получения координат

let box = document.querySelector('.box'),
    btn = document.querySelector('button');
let width = box.scrollWidth,
    height = box.scrollHeight;

console.log(width, height);
console.log(box.getBoundingClientRect().top);

// Для получения размера документа
console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);

btn.addEventListener('click', function () {
    box.style.height = box.scrollHeight + 'px';
});
