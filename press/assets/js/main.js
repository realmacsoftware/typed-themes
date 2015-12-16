$(document).ready(function () {
  /*
    ------------------------------------
    Intro height
    ------------------------------------
  */

  var windowH = $(window).height()
  var divH = windowH - 111

  $('.post-single__intro').css({'height': divH + 'px'})

  /*
    ------------------------------------
    Gradient
    ------------------------------------
  */

  var gradClasses = ['grad-1', 'grad-2', 'grad-3', 'grad-4', 'grad-5', 'grad-6', 'grad-7', 'grad-8', 'grad-9', 'grad-10', 'grad-11', 'grad-12', 'grad-13', 'grad-14', 'grad-15', 'grad-16', 'grad-17', 'grad-18', 'grad-19', 'grad-20', 'grad-21', 'grad-22', 'grad-23', 'grad-24', 'grad-25', 'grad-26', 'grad-27', 'grad-28', 'grad-29', 'grad-30', 'grad-31', 'grad-32', 'grad-33', 'grad-35', 'grad-36', 'grad-37', 'grad-38', 'grad-39', 'grad-40', 'grad-41', 'grad-42', 'grad-43', 'grad-44', 'grad-45', 'grad-46', 'grad-47', 'grad-48', 'grad-51', 'grad-52', 'grad-53', 'grad-54', 'grad-55', 'grad-56', 'grad-57', 'grad-58', 'grad-59', 'grad-60', 'grad-61', 'grad-62', 'grad-63', 'grad-64', 'grad-65', 'grad-66', 'grad-67', 'grad-68', 'grad-69', 'grad-70', 'grad-71', 'grad-72', 'grad-73', 'grad-74', 'grad-75', 'grad-76', 'grad-77', 'grad-78', 'grad-79', 'grad-80', 'grad-81', 'grad-82', 'grad-85', 'grad-86', 'grad-87', 'grad-88', 'grad-89', 'grad-90', 'grad-91', 'grad-92', 'grad-93', 'grad-94', 'grad-95', 'grad-96', 'grad-98', 'grad-99', 'grad-100', 'grad-101', 'grad-102', 'grad-103', 'grad-104', 'grad-105', 'grad-106', 'grad-107', 'grad-108', 'grad-109']

  $('.posts-list .overlay').each(function () {
    var grad = gradClasses[~~(Math.random() * gradClasses.length)]
    $(this).addClass(grad)
  })

  $('.page .overlay').addClass(gradClasses[~~(Math.random() * gradClasses.length)])

  /*
    ------------------------------------
    Make posts the same height
    ------------------------------------
  */

  function sameHeight () {
    $('.posts-list__post:nth-child(2)').addClass('posts-list__post--secondary')
    $('.posts-list__post:nth-child(3)').addClass('posts-list__post--secondary')
    $('.posts-list__post:nth-child(4)').addClass('posts-list__post--secondary')
    $('.posts-list__post:nth-child(5)').addClass('posts-list__post--secondary')

    $('.posts-list__post--secondary').css('height', 'auto')

    var maxHeight = 0

    $('.posts-list__post--secondary').each(function () {
      if ($(this).height() > maxHeight) {
        maxHeight = $(this).height()
      }
    })

    $('.posts-list__post--secondary').height(maxHeight)
  }
  sameHeight()
  window.onresize = sameHeight

  /*
    ------------------------------------
    Save the grad color
    ------------------------------------
  */

  var cookieColor = $.cookie('grad_class')

  if (cookieColor) {
    $('.post-single__post .overlay').addClass(cookieColor)
  } else {
    $('.post-single__post .overlay').addClass(gradClasses[~~(Math.random() * gradClasses.length)])
  }

  $(document).on('click', '.post-title', function () {
    var gradValue = $(this).parent().parent().find('.overlay').attr('class').split(/\s+/)

    $.each(gradValue, function (index, item) {
      if (item.indexOf('grad-') !== -1) {
        $.cookie('grad_class', item)
      }
    })
  })

  /*
     ------------------------------------
     Navigation
     ------------------------------------
  */

  var nav = responsiveNav('.navigation', {
    label: '',
    insert: 'before',
    customToggle: '#nav-toggle',
    openPos: 'static'
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

  $('.post-content').fitVids()
  $('.page-content').fitVids()
})


