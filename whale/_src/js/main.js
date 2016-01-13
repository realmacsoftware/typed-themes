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
     Fitvids
     ------------------------------------
  */

  $(".entry-content").fitVids()
});
