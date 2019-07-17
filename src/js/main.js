const startbutton = document.querySelector('.start__button--js');
const main = document.querySelector('.main--js');
const startMain = document.querySelector('.start');


startbutton.addEventListener('click', (e) =>{
    main.classList.toggle('main--animation');
    startMain.classList.toggle('start--animation');
});