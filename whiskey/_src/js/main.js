// @codekit-prepend "sharrre.js"

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
    var winS = $(this);

    if (winS.width() >= 992) {
      $('.site-navigation').show()
    } else {
      $('.site-navigation').hide()
    }
  })

  /*
     ------------------------------------
     Header
     ------------------------------------
  */

  function init() {
    window.addEventListener('scroll', function(e) {
      var distanceY = window.pageYOffset || document.documentElement.scrollTop,
          shrinkOn = 356,
          header = document.querySelector('header');

      if (distanceY > shrinkOn) {
        $('.site-header--mini').addClass('show-mini')
      } else {
        $('.site-header--mini').removeClass('show-mini')
      }
    })
  }
  window.onload = init()

  /*
     ------------------------------------
     FitVids
     ------------------------------------
  */

  $('.main').fitVids()

  /*
     ------------------------------------
     Social Buttons
     ------------------------------------
  */

  $('.shareme').sharrre({
    share: {
      twitter: true,
      facebook: true,
      pinterest: true
    },
    template: '<div class="box"><div class="left">Share</div><div class="middle"><a href="#" class="facebook"><i class="fa fa-facebook"></i></a><a href="#" class="twitter"><i class="fa fa-twitter"></i></a><a href="#" class="pinterest"><i class="fa fa-pinterest-p"></i></a></div><div class="right">{total}</div></div>',
    enableHover: false,
    enableTracking: true,
    render: function (api, options) {
      $(api.element).on('click', '.twitter', function () {
        api.openPopup('twitter')
      })
      $(api.element).on('click', '.facebook', function () {
        api.openPopup('facebook')
      })
      $(api.element).on('click', '.pinterest', function () {
        api.openPopup('pinterest')
      })
    }
  })
})
