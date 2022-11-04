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
    prevArrow:"<button type='button' class='slick-prev'><</button>",
    nextArrow:"<button type='button' class='slick-next'>></button>",
    breakpoint: 1448,
      settings: {
        arrows: false,
      }
  });
});