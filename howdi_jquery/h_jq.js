jQuery(document).ready(function($) {
  // jQuery('body').append('<a href="http://google.com">To Google </a>');
  // // jQuery('div.div1').remove();
  // let div_clone = jQuery('div').clone();
  // jQuery('body').append(div_clone);
  //

  jQuery('#field1, #field2').on('keyup', function(event) {
    let val1 = parseFloat(jQuery('#field1').val());
    let val2 = parseFloat(jQuery('#field2').val());
    let val3 = val1 + val2;
    jQuery('.result').html(val3);
  });

});
