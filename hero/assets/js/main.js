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
      $('.site-search').hide()
    } else {
      $('.navigation').hide()
      $('.site-search').show()
    }
  }
  manageMenu()
  $(window).bind('resize', manageMenu)

  /*
     ------------------------------------
     Search
     ------------------------------------
  */

  $('.site-search-trigger').click(function(e) {
    e.preventDefault();
    $('.site-search').animate({width: 'toggle'}, 350)
  })

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


