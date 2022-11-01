'use strict';
window.addEventListener('DOMContentLoaded', () => {
const burgerBtn = document.querySelector('.svg__burger');
const burgerMenu = document.querySelector('.nav__items');
// burger init
window.addEventListener('resize', () => {
    if(document.documentElement.clientWidth <= 920 || document.documentElement.clientWidth === 920) {
    burgerBtn.classList.add('animate__animated','animate__bounceInDown');

    } else {
    burgerBtn.classList.remove('animate__animated','animate__bounceInDown');
    }
});

burgerBtn.addEventListener('click', () => {
    burgerMenu.classList.add('burger__mode');
    burgerMenu.style.top = 70 + 'px';

});




});