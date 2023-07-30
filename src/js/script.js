
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  // ハンバーガーメニュー
  $(".js-hamburger,.js-sp-nav").click(function () {
    $(".js-hamburger").toggleClass("is-active");
    $(".js-sp-nav").fadeToggle();
  });
});

  var swiper = new Swiper(".js-works-swiper", {
    loop: true,
    pagination: {
      el: ".js-works-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000,
    },
  });