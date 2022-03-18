var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  clickable: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 1,
    },
  }
});
var swiper = new Swiper('.mySwiper1', {
  slidesPerView: 3,
  spaceBetween: 45,
  clickable: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    800: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }
});
var swiper = new Swiper('.mySwiper2', {
  slidesPerView: 1,
  spaceBetween: 45,
  clickable: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
  pagination: {
    el: '.swiper-pagination',
  },
});