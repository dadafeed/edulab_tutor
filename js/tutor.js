// 강사페이지 js

// 커뮤니티 캐러셀
(function ($) {
  "use strict";
  var swiper = new Swiper(".community-carousel", {
    loop: true,
    observer: true,
    observeParents: true,
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    }
  });
}(jQuery));