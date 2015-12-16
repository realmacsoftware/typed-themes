$(document).ready(function () {
  /*
    ------------------------------------
    Navigation
    ------------------------------------
  */

  $('#nav-toggle').click(function () {
    $('.navigation').slideToggle(250)
  })

  function manageMenu () {
    if ($(window).width() > 991) {
      $('.navigation').show()
    } else {
      $('.navigation').hide()
    }
  }
  manageMenu()
  $(window).bind('resize', manageMenu)

  /*
    ------------------------------------
    Alt tag caption
    ------------------------------------
  */

  $('.entry-content img').each(function () {
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
    Fitvids
    ------------------------------------
  */

  $('.entry-content').fitVids()
})
