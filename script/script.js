$( document ).ready(function() {
  $(".menu_open_button").click(function(){
    $(".links_header_menu_wrapper").toggleClass("disabled");
    $(".lenguage").toggleClass("disabled");
    $(".sosial_list").toggleClass("disabled");
    $(".sosial").toggleClass("disabled");
    $(".adress").toggleClass("disabled");
    $(".telephone").toggleClass("disabled");
    $(".menu_open_button").toggleClass("disabled_menu_open_close_button");
    return false;
  });

  $(".pop_up_main_slider_button").click(function(){
    $(".pop_up_main_bg").addClass("active_slider_pop_up");
    $(".pop_up_main_body").addClass("active_slider_pop_up");
    return false;
  });
  $(".close_pop_up_main").click(function(){
    $(".pop_up_main_bg").removeClass("active_slider_pop_up");
    $(".pop_up_main_body").removeClass("active_slider_pop_up");
    return false;
  });
  $(".pop_up_main_bg").click(function(){
    $(".pop_up_main_bg").removeClass("active_slider_pop_up");
    $(".pop_up_main_body").removeClass("active_slider_pop_up");
    return false;
  });

  $(".open_sosial_list").click(function(){
    $(".fixed_buttons_sosial_list").toggleClass("close_sosial_list");
  });

  $(".pop_up_request_button").click(function(){
    $(".pop_up_request_bg").toggleClass("close_pop_up_request");
    $(".pop_up_request_body").toggleClass("close_pop_up_request");
    return false;
  });
  $(".pop_up_request_bg").click(function(){
    $(".pop_up_request_bg").toggleClass("close_pop_up_request");
    $(".pop_up_request_body").toggleClass("close_pop_up_request");
    return false;
  });
  
  var swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    clickable: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
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
      el: '.swiper-pagination1',
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      500: {
        slidesPerView: 2,
      },
      900: {
        slidesPerView: 3,
      },
    }
  });
  var swiper = new Swiper('.mySwiper2', {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 65,
    clickable: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next2",
      prevEl: ".swiper-button-prev2",
    },
    pagination: {
      el: '.swiper-pagination2',
      clickable: true,
    },
  });
});