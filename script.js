let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'), // Множественное число Elements говорит о том, что это псевдо-массив
    circle = document.getElementsByClassName('circle'), // Множественное число Elements говорит о том, что это псевдо-массив, без точки
    heart = document.querySelectorAll('.heart'), // этот псевдо-массив имеет только один метод forEach
    wrapper = document.querySelector('.wrapper');

// изменяем стили элементов

// в js для задания стилей используется camel case
box.style.backgroundColor = 'blue';

// вторую кнопку делаем овальной
btn[1].style.borderRadius = '50%';

//круги превращаем в светофор
circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

//heart.forEach(item => {
//    item.style.background = 'green';
//});

// чтобы создать новый элемент

let div = document.createElement('div'),
    text = document.createTextNode('text here...');

//добавляем класс к созданному элементу
div.classList.add('black');

//вставляем элемент на страницу
// document.body.appendChild(div);

// вставлять элементы можно не только в body, но в любой родительский элемент
wrapper.appendChild(div);

// вставить элемент до
document.body.insertBefore(div, circle[0]);

// удаление элемента со страницы
document.body.removeChild(circle[1]);
wrapper.removeChild(heart[0]);
document.body.replaceChild(btn[1], circle[1]);

// добавляем текст в эелемент
div.innerHTML = 'Hello';

// если хотим вставить HTML код, но безопаснее div.textContent = '<h1>Hello</h1>';
div.innerHTML = '<h1>Hello</h1>';


// - выборка элементов на странице
// - добавление стилей
// - добавление элементов на страницу
// - удаление элементов
// - замена элементов
// - добавление текста в элементы
