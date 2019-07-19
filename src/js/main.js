import { brotliDecompressSync } from "zlib";

const startbutton = document.querySelector('.start__button--js');
const main = document.querySelector('.tile--js');
const startMain = document.querySelector('.start');


startbutton.addEventListener('click', (e) =>{
    main.classList.toggle('main--animation');
    startMain.classList.toggle('start--animation');
});

const photoFirst = document.querySelector('.main__image--js');
const zoomPhotoFirst = document.querySelector('.photo-zoom');
const bigPhotoFirst = document.querySelector('.photo-zoom__image--js')

photoFirst.addEventListener('click', (e) =>{
    zoomPhotoFirst.classList.add('photo-zoom--visible');
});

bigPhotoFirst.addEventListener('click', (e) =>{
    zoomPhotoFirst.classList.remove('photo-zoom--visible');
});

const photoSecond = document.querySelector('.main-second__image--js');
const zoomPhotoSecond = document.querySelector('.photo-zoom-second');
const bigPhotoSecond = document.querySelector('.photo-zoom-second__image--js');

photoSecond.addEventListener('click', (e) =>{
    zoomPhotoSecond.classList.add('photo-zoom--visible');
});

bigPhotoSecond.addEventListener('click', (e) =>{
    zoomPhotoSecond.classList.remove('photo-zoom--visible');
});