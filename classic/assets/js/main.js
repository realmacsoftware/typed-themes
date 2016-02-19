$(function() {

  // Responsive Menu

  $('.menu-reveal').on('click', function(event) {
    event.preventDefault();

    $('.site-nav li').toggle();
    $('.site-search').toggle();
    ($(this).text() === 'Show Menu') ? $(this).text('Hide Menu') : $(this).text('Show Menu');
  });


  // FitVids

  $('.page-content').fitVids();
  $('.post-content').fitVids();


  // Syntax Highlighting

  $('pre').wrapInner('<code></code>');
  $('pre code').each(function(index, value) {
    hljs.highlightBlock(value);
  });


  // Bigfoot

  $.bigfoot();

});
