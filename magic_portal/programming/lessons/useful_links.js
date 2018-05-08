$(document).ready(function() {

  let links = getUsefulLinks();
  $main = $('main');
  for (var i = 0; i < links.length; i++) {
    let $div_link = $('<div class="useful-link"></div>');
    $div_link.append('<p>'+links[i].description+'</p>');
    $div_link.append('<a href="'+links[i].link+'">'+links[i].linktext+'</a> <br>');
    $main.append($div_link);
  }

});

function getUsefulLinks() {
  links = [
    {
      "link":"https://html5book.ru/",
      "linktext": "html5book",
      "description":"Сайт для тех, кто изучает веб-технологии и создает сайты"
    },
    {
      "link":"http://css.maxdesign.com.au/floatutorial/index.htm",
      "linktext":"css float tutorial",
      "description":"Float tuturial"
    }
  ];
  return links;
}
