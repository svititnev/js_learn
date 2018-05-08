(function($, undefined) {
  $(function() {
    $('h2').css('color', 'green');

    let m = 5;
    let n = 5;
    let w = 50;
    let h = 50;
    let left = 10;
    let top = 10;
    let dx = 10;
    let dy = 10;

    for (var i = 0; i < m; i++) {
      for (var j = 0; j < n; j++) {
        let $myDiv = magicDiv(i, j, w, h, left, top, 10, 10);
        $('body').append($myDiv);
      }
    }
  });

  function magicDiv(i, j, w, h, left, top, dx, dy) {
    let $myDiv = $('<div></div>');
    $myDiv.css('width', '' + (w) + 'px');
    $myDiv.css('height', '' + (h) + 'px');
    $myDiv.css('border', '1px solid '+randomColor());
    $myDiv.css('position', 'absolute');
    $myDiv.css('font', '16pt Verdana');
    $myDiv.css('left', '' + (left + i * (w + dx)) + 'px');
    $myDiv.css('top', '' + (top + j * (h + dy)) + 'px');
    $myDiv.mouseover(function() {
      $myDiv.css('border', '2px solid blue');
      $myDiv.css('transform', 'rotate(90deg)');
      $myDiv.css('background-color', randomColor());
      $myDiv.css('transition-duration', '0.1s');
      $myDiv.css('color', 'black');
      $myDiv.css('text-align', 'center');
      $myDiv.css('vertical-align', 'bottom');
      $myDiv.html('' + randomLetter());
    });
    $myDiv.mouseout(function() {
      $myDiv.css('border', '1px solid red');
      $myDiv.css('background-color', randomColor());
      $myDiv.css('transform', 'rotate(0deg)');
      $myDiv.css('transition-duration', '5s');
    });
    return $myDiv;
  }

  function randomLetter() {
    let code = Math.random() * 1000 + 50;
    return String.fromCharCode(code);
  }

  function randomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

})(jQuery);


// сначала в документе размещаешь div
// в скрипте получашешь его, например, так:
let div = document.getElementById('divOut');

// затем выводишь в него любой текст:
div.innerHTML = 'Любой текст';


let radius = prompt('Введите радиус основания цилиндра');
let height = prompt('Введите высоту цилиндра');
height = parseFloat(height);
radius = parseFloat(radius);
radius *= radius;
let pi = Math.PI;
let squareOfBase = radius * pi;
let volume = squareOfBase * height;
alert(volume);
