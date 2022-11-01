'use strict';
const btnDown = document.querySelector('.btn__scroll');
const leftImg = document.querySelector('.product__bg.img');
const btnShow = document.querySelector('.text__btn');
// console.log(leftImg);

btnDown.addEventListener('click', () => {
    window.scrollTo({
        top: 900,
        behavior: 'smooth',
    });    
});

btnShow.addEventListener('click', () => {
    leftImg.classList.toggle('animate__left');
    setTimeout(() => {
        leftImg.classList.toggle('animate__right');
        console.log('right');
    }, 5000),
    //  setTimeout(() => {
    //     leftImg.classList.toggle('animate__left');
    //     leftImg.classList.toggle('animate__right');
    //     console.log('left' + `${date.getSeconds - (new Date().getSeconds())} sc`);
    // }, 10010);
   

});

