const menu = ['', '', '', '', ''];
const swiper = new Swiper('.header__swiper', {
  direction: 'vertical',
  loop: true,
  effect: 'fade',
  slidesPerView: 1,
  slidesPerGroup: 5,
  autoplay: {
    autoplay: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  pagination: {
    el: '.swiper-pagination__header',
    type: 'bullets',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (menu[index]) + '</span>';
    },
  },

  // on: {
  //   init: function () {
  //     console.log('swiper initialized');
  //   },
      // for(let i = this.activeIndex; i <= 6; i++) {
        
      // }
      // let pseudo = window.getComputedStyle(document.querySelector('.swiper-slide'), ':after');
      //   pseudo.getPropertyValue('background');
      //   let pseudoBackground = pseudo.getPropertyValue('background');
      //   pseudo.setProperty('background', 'red');
        
      // if (this.activeIndex >= 2) {
      //   console.log('HIT');
      // }
      // console.log(`PSEUDO::: ${pseudo}`);
      // console.log(pseudoBackground);
      // pseudoBackground = bgColor[2];
      // console.log(pseudoBackground);
      // console.log(pseudoBackground);
      // switch (this.activeIndex) {
      //   case 2:
      //     console.log(pseudoBackground);
      //     pseudoBackground = bgColor[2];
      //     console.log(pseudoBackground);
      //     break;
      //   case 3:
      //     console.log(pseudoBackground);
      //     pseudoBackground = bgColor[1];
      //     console.log(pseudoBackground);
      //     break;
      //   case 4:
      //     pseudoBackground = bgColor[2];
      //     break;
      //   case 5:
      //     pseudoBackground = bgColor[3];
      //     break;
      //   case 6:
      //     pseudoBackground = bgColor[4];
      //     break;
      //   default:
          //     pseudoBackground = bgColor[0];
          // }
          // console.log(pseudo.background);

    //   }
    // },
  // }

// });

// document.querySelectorAll(".swiper-slide").forEach(function (d, i) {
//   d.style.background = bgColor[i];
});