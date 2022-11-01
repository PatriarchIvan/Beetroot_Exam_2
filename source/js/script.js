'use strict';
window.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.querySelector('.svg__burger');
    const burgerMenu = document.querySelector('.nav__items');
    // burger init
    // $(burgerMenu).addClass('burger__mode');
    // $(burgerMenu).addClass('burger__mode');

    $(burgerMenu).addClass('burger__mode');
    
    
    window.addEventListener('resize', () => {
        if (document.documentElement.clientWidth <= 920) {
            burgerBtn.classList.add('animate__animated', 'animate__bounceInDown');
            $(burgerMenu).removeClass('nav__items');
            $(burgerMenu).hide();
        } else {
            burgerBtn.classList.remove('animate__animated', 'animate__bounceInDown');
            $(burgerMenu).removeClass('burger__mode');
            $(burgerMenu).addClass('nav__items');
            $(burgerMenu).show();
        }
    });

    $(burgerBtn).click(() => {
        $(burgerMenu).removeClass('nav__items');
        $(burgerMenu).addClass('animate__animated');
        $(burgerMenu).addClass('animate__backInLeft');
        $(burgerMenu).toggle();
    });

});