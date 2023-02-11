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
let original_image = document.createElement('img');
original_image.onload = () => {
    populateImageSize(original_image)

    // Copy original image to resized image
    image.src = original_image.src;
}

// Called when Load Image button is clicked
function importImage() {
    let input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = () => {
        let file = input.files[0];
        original_image.src = URL.createObjectURL(file);
    }
    input.click();
}

let widthInput = document.getElementById('width');
let heightInput = document.getElementById('height');

function populateImageSize(image) {
    widthInput.value = image.naturalWidth;
    heightInput.value = image.naturalHeight;
    widthInput.max = image.naturalWidth;
    heightInput.max = image.naturalHeight;
    widthInput.disabled = false;
    heightInput.disabled = false;
}

function size_input_key_down(event) {
    if (event.key === 'Enter') {
        if (widthInput.value < 1) {
            widthInput.value = 1;
        }
        if (widthInput.value > original_image.naturalWidth) {
            widthInput.value = original_image.naturalWidth;
        }
        if (heightInput.value < 1) {
            heightInput.value = 1;
        }
        if (heightInput.value > original_image.naturalHeight) {
            heightInput.value = original_image.naturalHeight;
        }
        image.src = resizeImage(original_image, widthInput.value, heightInput.value);
    }
}

function resizeImage(image, width, height) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0, width, height);
    return canvas.toDataURL();
}