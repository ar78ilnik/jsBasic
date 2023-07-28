let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'), // Множественное число Elements говорит о том, что это псевдо-массив
    circle = document.getElementsByClassName('circle'), // Множественное число Elements говорит о том, что это псевдо-массив, без точки
    heart = document.querySelectorAll('.heart'); // этот псевдо-массив имеет только один метод forEach

console.log(box);

console.log(btn); // вывод всего массива
console.log(btn[0]); // вывод отдельно элемента массива

console.log(circle[2]);

console.log(heart);
