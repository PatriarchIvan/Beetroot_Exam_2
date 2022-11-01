'use strict';
const btnDown = document.querySelector('.btn__scroll');
const leftImg = document.querySelector('.product__bg.img');
console.log(leftImg);

btnDown.addEventListener('click', () => {
    window.scrollTo({
        top: 900,
        behavior: 'smooth',
    });    
});

window.addEventListener('scroll', () => {
    console.log(window.pageYOffset);
    swipeLeftImg(); 
}, {once : true});

const swipeLeftImg = () => {
    if (window.pageYOffset >= 900 && window.pageYOffset <= 1005) {
        console.log(window.pageYOffset);
        leftImg.classList.add('.animate__left');
    } 
    // else if (window.pageYOffset <= 1000) {
    //     console.log(window.pageYOffset);
    // }
};

