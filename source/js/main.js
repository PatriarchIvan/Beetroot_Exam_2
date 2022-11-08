'use strict';
window.addEventListener('DOMContentLoaded', () => {
const btnDown = document.querySelector('.btn__scroll');
const leftImg = document.querySelector('.product__bg.img');
const rightImg = document.querySelector('.product__bg.img_reversed');
const btnShowLeft = document.querySelector('.text__btn_left');
const btnShowRight = document.querySelector('.text__btn_right');
const hiddenTextLeft = document.querySelector('.text__text_hidden');
const hiddenTextRight = document.querySelector('.text__text_hidden-reversed');
const gallery = document.querySelector('.wrapper');
const btnShowGallery = document.querySelector('.gallery__btn');
const userName = document.querySelector('.name');
const userMail = document.querySelector('.mail');
const form = document.querySelector('.form');
const btnSend = document.querySelector('.form__btn');


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelector('.map').addEventListener('mouseover', () => {
    document.querySelector('.form').style.top = '0';
});

document.querySelector('.map').addEventListener('mouseout', () => {
    document.querySelector('.form').style.top = '-300px';
});

btnSend.addEventListener('click', (e) => {
    if (!userName.value || !userMail.value){
        alert('Enter correct data...');
        return;
    } else {
        e.preventDefault();
        window.localStorage.setItem('name', userName.value);
        window.localStorage.setItem('mail', userMail.value);
        alert(`Hello ${window.localStorage.getItem('name')}!We will mail you by ${window.localStorage.getItem('mail')} soon!`);
        form.reset();
    }
});

btnDown.addEventListener('click', () => {
    window.scrollTo({
        top: 850,
        behavior: 'smooth',
    });
});

btnShowLeft.addEventListener('click', () => {
    animateText(hiddenTextLeft, 'left');
    animateImg(leftImg);
    hideBtn(btnShowLeft);
});

btnShowRight.addEventListener('click', () => {
    animateText(hiddenTextRight, 'right');
    animateImg(rightImg);
    hideBtn(btnShowRight);
});

btnShowGallery.addEventListener('click', () => {
    if (btnShowGallery.textContent == 'Hide Gallery') {
        for (let i = 1; i <= 4; i++) {
            removeImage(gallery);
            btnShowGallery.textContent = 'Show More';
        }
    } else {
        for (let i = 3; i >= 1; i--) {
            createImage(gallery, `./source/img/main/gallery_${i}.png`);
            if (i == 1) {
                createImage(gallery, `./source/img/main/gallery_${i+4}.png`);
            }
        }
        btnShowGallery.textContent = 'Hide Gallery';
    }

}, );
function animateImg(img) {
    if (document.documentElement.clientWidth >= 800) {
        if(img === rightImg) {
            img.classList.toggle('animate__left_reversed');
            setTimeout(() => {
                img.classList.toggle('animate__right_reversed');
            }, 4000);
        } else {
            img.classList.toggle('animate__left');
            setTimeout(() => {
                img.classList.toggle('animate__right');
            }, 4000);
        }
    }
}

function animateText(text, direction) {
    text.style.visibility = 'visible';
    text.style.height = 'inherit';
    if (direction === 'right') {
        text.classList.add('animate__animated', 'animate__bounceInLeft');
    } else if (direction === 'left'){
        text.classList.add('animate__animated', 'animate__bounceInRight');
    }
}

function hideBtn(btn) {
    if (btn == btnShowRight) {
        btn.classList.add('animate__animated', 'animate__bounceOutLeft');
    } else {
        btn.classList.add('animate__animated', 'animate__bounceOutRight');
    }
    setTimeout(() => {
        $(btn).toggle('slow');
    }, 1500);
    
}

function createImage(parent, src) {
    const newImg = document.createElement('div');
    for (let i = 1; i <= 5; i++) {
        newImg.classList.add('gallery__item', 'big');
        newImg.innerHTML = `
        <img src="${src}" alt="galleryPicture"
         class="gallery__item picture">`;
        parent.appendChild(newImg);
    }
}

function removeImage(parent) {
    parent.removeChild(parent.lastChild);
}

});