$(document).ready(function () {
  /*
     ------------------------------------
     Responsive navigation
     ------------------------------------
  */

  var nav = responsiveNav(".site-navigation nav", {
    label: "",
    insert: "before",
    customToggle: "#nav-toggle",
    openPos: "static"
  })

  /*
     ------------------------------------
     Search
     ------------------------------------
  */

  $('.site-search-trigger').click(function(e) {
    e.preventDefault();
    $('.site-search form').animate({width: 'toggle'}, 350)
  })

  function manageSearch () {
    if ($(window).width() > 767) {
      $('.site-search form').hide()
    } else {
      $('.site-search form').show()
    }
  }
  manageMenu()
  $(window).bind('resize', manageSearch)

  /*
     ------------------------------------
     Fitvids
     ------------------------------------
  */

  $(".entry-content").fitVids()
});


