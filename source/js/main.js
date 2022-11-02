'use strict';
const btnDown = document.querySelector('.btn__scroll');
const leftImg = document.querySelector('.product__bg.img');
const btnShow = document.querySelector('.text__btn_left');
const hiddenText = document.querySelector('.text__text_hidden');

btnDown.addEventListener('click', () => {
    window.scrollTo({
        top: 900,
        behavior: 'smooth',
    });    
});

btnShow.addEventListener('click', () => {
    hiddenText.style.visibility = 'visible';
    hiddenText.style.height = 'inherit';
    leftImg.classList.toggle('animate__left');
    btnShow.classList.add('animate__animated', 'animate__bounceOutRight');
    setTimeout(() => {
        leftImg.classList.toggle('animate__right');
    }, 4000);
     setTimeout(() => {
        leftImg.classList.toggle('animate__left');
        leftImg.classList.toggle('animate__right');
        console.log(leftImg.classList);
    }, 8010);
});

