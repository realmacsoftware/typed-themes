$(document).ready(function() {
  /*
     ------------------------------------
     FitVids
     ------------------------------------
  */

  $('.post-excerpt, .post-content, .content').fitVids()

  /*
     ------------------------------------
     Navigation
     ------------------------------------
  */

  $('.menu-toggle').click(function () {
    $('.site-navigation').slideToggle(250)

    var centerHeight = $('.site-navigation .center').outerHeight()

    $('.site-navigation .center').css({
      'margin-top': -(centerHeight/2)
    })
  })
})
