const swiper = new Swiper('.lines__slider', {
  breakpoints: {
    450:{
      // centeredSlides: false,
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
  },
  slidesPerView: 1,
  slidesPerGroup: 1,

    // Navigation arrows
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
    speed: 1000,
});


const swiperSlider3d = new Swiper(".slider3d", {
  effect: 'fade',
  fadeEffect: {
    crossFade: false
  },
  speed: 100,
  allowTouchMove: false,
  navigation: {
    nextEl: ".modal-next",
    prevEl: ".modal-prev",
  },
});

const swiperLidersSlider = new Swiper(".lidersslider", {
  breakpoints: {
    450:{
      centeredSlides: true,
      slidesPerView: 1.45,
    },
  },


  initialSlide: 2,
  loop: true,
  centeredSlides: false,
  slidesPerView: 1,
  navigation: {
    nextEl: '.lider-next',
    prevEl: '.lider-prev',
  },
  speed: 2000,
});



// // swiper.controller.control = swiperSlider3d;
// swiperSlider3d.controller.control = swiper;