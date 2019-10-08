import { brotliDecompressSync } from "zlib";

//start animation

const startbutton = document.querySelector('.start__button--js');
const main = document.querySelector('.tile--js');
const startMain = document.querySelector('.start');


startbutton.addEventListener('click', (e) =>{
    main.classList.toggle('main--animation');
    startMain.classList.toggle('start--animation');
});


//Zoom for first photo

const photoFirst = document.querySelector('.main__image--js');
const zoomPhotoFirst = document.querySelector('.photo-zoom');
const exitZoom = document.querySelector('.photo-zoom__exit--js');

photoFirst.addEventListener('click', (e) =>{
    zoomPhotoFirst.classList.add('photo-zoom--visible');
});

exitZoom.addEventListener('click', (e) =>{
    zoomPhotoFirst.classList.remove('photo-zoom--visible');
});

//Zoom for second photo

const photoSecond = document.querySelector('.main-second__image--js');
const zoomPhotoSecond = document.querySelector('.photo-zoom-second');
const exitZoomSecond = document.querySelector('.photo-zoom-second__exit--js');

photoSecond.addEventListener('click', (e) =>{
    zoomPhotoSecond.classList.add('photo-zoom--visible');
});

exitZoomSecond.addEventListener('click', (e) =>{
    zoomPhotoSecond.classList.remove('photo-zoom--visible');
});