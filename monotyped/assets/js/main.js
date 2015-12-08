$(function() {

  // Responsive Menu

  $('.menu-toggle').click(function() {
    $('.site-navigation').slideToggle(250);
  });

  $(window).on('resize', function() {
    if ($(this).width() >= 990) {
      $('.site-navigation').show();
    } else {
      $('.site-navigation').hide();
    }
  });


  // FitVids

  $('.main').fitVids();


  // Bigfoot

  $.bigfoot();

});
