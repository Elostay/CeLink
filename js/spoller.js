$(document).ready(function () {
  $('.faqs__item-btn').click(function (event) {
    if ($('.faqs__list').hasClass('one-spoller')) {
      $('.faqs__item-btn').not($(this)).removeClass('active');
      $('.faqs__item-text').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('active').next().slideToggle(300);
  });
});
