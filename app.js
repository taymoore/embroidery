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

let image = document.getElementById('image');
function importImage() {
    let input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = _ => {
        let file = input.files[0];
        console.log(file);
        image.src = URL.createObjectURL(file);
    };
    input.click();
}