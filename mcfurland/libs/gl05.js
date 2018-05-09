$(document).ready(function() {

  colors = ['red', 'green', 'blue', 'yellow', 'orange', 'violet'];

  let $main = $('main');

  for (var i = 0; i < colors.length; i++) {
    let $div = $('<div></div>');
    $div.attr('data-color', colors[i]);
    $div.addClass('colorer');
    $div.css({
      'width':'100px',
      'height':'100px',
      'border':'1px solid white',
      'background-color':colors[i]
    });
    $main.append($div);
  }

  $('div.colorer').each(function() {
    $(this).click(function() {
      $('body').css('background-color', $(this).data('color'));      
    });
  })

});
