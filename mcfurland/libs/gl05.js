$(document).ready(function() {

  colors = ['red', 'green', 'blue', 'yellow', 'orange', 'violet'];

  let $main = $('main');

  let $submenu = $('<div></div>');
  $submenu.css({
    'width':'100px',
    'background-color': '#9140a1',
    'position':'absolute'
  });
  for (var i = 0; i < 5; i++) {
    let $link = $('<a href="#">Link '+i+'</a>');
    $submenu.append($link);
    $submenu.append('<br>');
  }
  $main.append($submenu);
  $submenu.hide();

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
    $(this).hover(function(event) {
      // alert(event.target);
      $submenu.css('left', ''+event.target.offsetLeft+'px');
      $submenu.css('top', '213px');
      $submenu.slideDown(500);
    }, function() {
      $submenu.hide();
    });
  })

  $submenu.hover(function() {
    $submenu.show();
  }, function() {
    $submenu.hide();
  });

  // faq
  //$('.answer').css('height', 'auto');
  $('.question').each(function() {
    $(this).click(function() {
      $('.answer').hide();
      let $answer = $(this).next('.answer');
      // $answer.hide();
      $answer.css('visibility', 'visible');
      $answer.css('height', 'auto');
      $answer.fadeIn('slow');
    });
  });

  $(".googlink").click(function(evt) {
    evt.preventDefault();
    // $('.google-form').slideToggle();
    $('.google-form').animate({
      transform: 'rotate(20deg)'
    }, 1000
  );
  });


});
