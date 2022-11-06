'use strict';
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

btnDown.addEventListener('click', () => {
    window.scrollTo({
        top: 850,
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

btnShowGallery.addEventListener('click', () => {
    for(let i = 3; i >= 1; i--) {
        createImage(gallery, `./source/img/main/gallery_${i}.png`);
        if (i == 1) {
            createImage(gallery, `./source/img/main/gallery_${i+4}.png`);
        } 
    }
    btnShowGallery.textContent = 'Hide Gallery';
},
 
);

btnSend.addEventListener('click', () => {
});

function validateForm (form, prop) {
    console.log(form);
    console.log(form.input);
    console.log(prop.value);
}

validateForm(form, 'name');

function rememberUser(name, mail) {
    window.localStorage.setItem('name', name.value);
    window.localStorage.setItem('mail', mail.value);
    alert(`Hello ${window.localStorage.getItem('name')}!We will contact you on ${window.localStorage.getItem('mail')}`);
}

function createImage (parent, src) {
    const newImg = document.createElement('div');
    for(let i = 1; i <= 6; i++){
        if (!i % 3 === 0) {
            newImg.classList.add('gallery__item');
            newImg.classList.add('gallery__item', 'big');
        }
    }
    newImg.innerHTML = `
    <img src="${src}" alt="galleryPicture"
     class="gallery__item picture">`;
    parent.append(newImg);
}

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


// btnShowGallery.onclick = () => {
    
//     btnShowGallery.
// };