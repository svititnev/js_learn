$(document).ready(function() {
  // $('header').hide().slideDown(5000);
  $('table').css({'border':'1px solid blue', 'margin-top':'10px', 'width':'50%'});


  $('tr:even').addClass('row-even');
  $('tr:odd').addClass('row-odd');

  // $('tr:even').each(function() {
  //   $(this).click(function(event) {
  //     $(this).toggleClass('row-even row-odd');
  //   });
  // });

  $('tr:even').click(function(event) {
      $(this).toggleClass('row-even row-odd');
  });

  $('body').append('<a></a>');
  let $a = $('a');
  $a.text('Google');
  $a.attr('href', 'http://www.google.com');





});
