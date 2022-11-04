// const menuNews = ['', '', '', '', ''];
// const swiperNews = new Swiper('.swiper__news', {
//     // Optional parameters
//     // direction: 'horizontal',
//     slidesPerView: 3,
//     // slidesPerGroup: 3,
//     spaceBetween: 30,
//     loop: true,
//     autoplay: true,

//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination-news',
//     },

//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },

//   });
//   console.log('ready');

$(document).ready(function () {
  $('.news__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
  });
});