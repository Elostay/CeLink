new Swiper('.celebrities-slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  simulateTouch: false,
  spaceBetween: 16,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    350: {
      slidesPerView: 1.1,
    },
    400: {
      slidesPerView: 1.3,
    },
    450: {
      slidesPerView: 1.5,
    },
    500: {
      slidesPerView: 1.5,
    },
    550: {
      slidesPerView: 1.5,
    },
    600: {
      slidesPerView: 2,
    },
    //  650: {
    //    slidesPerView: 2.2,
    //  },
    //  700: {
    //    slidesPerView: 2.2,
    //  },
    //  750: {
    //    slidesPerView: 2.2,
    //  },
    1192: {
      slidesPerView: 4,
    },
  },
});
