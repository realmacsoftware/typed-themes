$(document).ready(function () {
  /*
     ------------------------------------
     FitVids
     ------------------------------------
  */

  $('.content__inner').fitVids()

  /*
     ------------------------------------
     Trim sidebar excerpts
     ------------------------------------
  */

  $('.sidebar-post .post-excerpt, .post-pagination .post-excerpt').each(function () {
    var string = $(this).html()
    string = string.replace(/^(.{150}[^\s]*).*/, '$1')
    string = string + '…</p>'
    $(this).html(string)
  })
})


