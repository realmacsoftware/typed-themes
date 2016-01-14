$(document).ready(function () {
  /*
    ------------------------------------
    Navigation
    ------------------------------------
  */

  $('.menu-toggle').click(function () {
    $('.site-navigation').slideToggle(250)
  })

  $(window).on('resize', function () {
    var winS = $(this)

    if (winS.width() >= 720) {
      $('.site-navigation').show()
    } else {
      $('.site-navigation').hide()
    }
  })

  /*
     ------------------------------------
     FitVids
     ------------------------------------
  */

  $('.post').fitVids()

  /*
     ------------------------------------
     Alt tag caption
     ------------------------------------
   */

  $('.content img').each(function () {
    var alt = $(this).attr('alt')

    if (alt) {
      $(this).after('<figure class="figure-caption">' + alt + '</figure>')
    }
  })

  /*
     ------------------------------------
     Syntax highlighting
     ------------------------------------
  */

  $('pre code').each(function (i, block) {
    hljs.highlightBlock(block)
  })

  /*
     ------------------------------------
     Up next
     ------------------------------------
  */

  var upnext = $('.upnext')

  $(window).scroll(function () {
    if ($(document).height() <= ($(window).height() + $(window).scrollTop()) + 800) {
      upnext.fadeIn()
    } else {
      upnext.hide()
    }
  })
})
