'use strict';
const btnDown = document.querySelector('.btn__scroll');
const leftImg = document.querySelector('.product__bg.img');
const rightImg = document.querySelector('.product__bg.img_reversed');
const btnShowLeft = document.querySelector('.text__btn_left');
const btnShowRight = document.querySelector('.text__btn_right');
const hiddenTextLeft = document.querySelector('.text__text_hidden');
const hiddenTextRight = document.querySelector('.text__text_hidden-reversed');

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

btnDown.addEventListener('click', () => {
    window.scrollTo({
        top: 900,
        behavior: 'smooth',
    });
});

btnShowLeft.addEventListener('click', () => {
    hiddenTextLeft.style.visibility = 'visible';
    hiddenTextLeft.style.height = 'inherit';
    hiddenTextLeft.classList.add('animate__animated', 'animate__bounceInRight');
    btnShowLeft.classList.add('animate__animated', 'animate__bounceOutRight');
    setTimeout(() => {
        btnShowLeft.style.display = 'none';
    }, 1000);

    if (document.documentElement.clientWidth >= 800) {
        leftImg.classList.toggle('animate__left');
        setTimeout(() => {
            leftImg.classList.toggle('animate__right');
        }, 4000);
    }
});

btnShowRight.addEventListener('click', () => {
    hiddenTextRight.style.visibility = 'visible';
    hiddenTextRight.style.height = 'inherit';
    hiddenTextRight.classList.add('animate__animated', 'animate__bounceInRight');
    btnShowRight.classList.add('animate__animated', 'animate__bounceOutLeft');
    setTimeout(() => {
        btnShowRight.style.display = 'none';
    }, 1000);

    if (document.documentElement.clientWidth >= 800) {
        rightImg.classList.toggle('animate__left_reversed');
        setTimeout(() => {
            rightImg.classList.toggle('animate__right_reversed');
        }, 4000);
    }
});
