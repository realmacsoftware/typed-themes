$(function() {

  // Responsive Menu

  $('.menu-reveal').on('click', function(event) {
    event.preventDefault();
    ($(this).text() === 'Show Menu') ? $(this).text('Hide Menu') : $(this).text('Show Menu');
    $('.site-nav li').slideToggle();
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
