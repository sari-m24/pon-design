
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  // ハンバーガーメニュー
  $(".js-hamburger,.js-sp-nav").click(function () {
    $(".js-hamburger").toggleClass("is-active");
    $(".js-sp-nav").fadeToggle();
  });

  // ヘッダーの背景色変更
  $(function () {
    $(window).on('scroll', function () {
        if ($('.p-mv').height() < $(this).scrollTop()) {
            $('.js-header').addClass('change-color');
      } else {
            $('.js-header').removeClass('change-color');
      }
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
  })
});