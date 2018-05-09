$(document).ready(function() {
  let $pqs = $('span.pq');
  $pqs.each(function() {
    let $pq = $(this).clone();
    $pq.toggleClass('pq pullquote');
    $(this).after($pq);
  })
});
