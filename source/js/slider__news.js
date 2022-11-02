const swiperNews = new Swiper('.swiper__news', {
    // Optional parameters
    // direction: 'horizontal',
    slidesPerView: 3,
    // slidesPerGroup: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination-news',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
  });
  console.log('ready');