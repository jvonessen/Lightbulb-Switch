$(document).ready(function() {
  $('.js-lightbulb').click(function(event) {
    $('.bulb-on').removeClass('bulb-on');
    $(this).addClass('bulb-on');
  });
});
