jQuery(document).ready(function($) {

  let matr = [[],[],[]];

  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      let cell = new Cell(i, j, 0);
      matr[i][j] = cell;
      jQuery('body').append(matr[i][j]);
    }
  }

  //jQuery('body').append('Some text');

  function Cell(i, j, val) {
    this.i = i;
    this.j = j;
    this.val = val;
    this.div = getCellDiv();
    this.div.css('left', '10px');
  }

  function getCellDiv() {
    let $div = $('<div></div>');
    $div.css('width', '50px');
    $div.css('height', '50px');
    $div.css('border', '1px solid green');
    $div.css('position', 'absolute');
    return $div;
  }

});
