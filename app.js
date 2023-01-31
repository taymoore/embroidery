'use strict';
const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function () {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if (className === 'light-theme') {
        switcher.textContent = 'Dark';
    } else {
        switcher.textContent = 'Light';
    }
    console.log('current class name: ', className);
});

const load_image_button = document.getElementById('load_image');
let image = document.getElementById('image')
load_image_button.addEventListener('click', function () {
    image.src = 'https://picsum.photos/200';
    document.body.append(image);
    console.log('image loaded');
});