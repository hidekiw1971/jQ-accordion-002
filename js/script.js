
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  // ↓この下にコードを書く

  $('.menu-item-btn').click(function () {
    $(this).siblings('ul').stop().slideToggle();
  });

  // ↑この上にコードを書く
});
