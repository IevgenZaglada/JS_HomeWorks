// jQuery | $ - two ways to trigger jQuery
console.log(jQuery);
console.log($);

// Sizzle - jQuery search engine, which works using a CSS selectors

document.addEventListener('DOMContentLoaded', function () {
  console.log('DOMContentLoaded');
});

$(document).ready(function () {
  console.log('DOM is loaded, because we have ".ready" listener added');
});

$(document).ready(function () {
  var $element = $('.wrapper'); // returns array
  console.log($element);
  var $elementsParent = $('.wrapper').parent();
  console.log('.parent selector in action:', $elementsParent);
  var $elementTwo = $('.wrapper')[0]; // returns clear single element
  console.log($elementTwo);
  var $paragraph = $element.find('p'); // .find method searches only inside of a specified element
  console.log('Paragraph:', $paragraph);
  var $p = $('p');
  $p.addClass('purple');
  $('body').addClass('testClass');
  $('body').removeClass('testClass');
  $p.css('background-color', 'rgb(137, 149, 250)');
  $('body').css({
    'font-size': '24px',
    'background-color': 'rgb(149, 56, 16)',
    padding: '15px'
  });
  $('a').attr('href', 'http://www.google.com/');
  $('a').attr('target', 'blank');

});

// more modern way of using jQuery

$(function () {
  console.log('Modern way of jQuery usage test');
});

// pretty important moment in jQueary - is chaning, or - Call chains. This means that for every elements collection method chang can be applied. For instance here we have method chain of 'css' and 'attr' applied to elements collection $links one after another

$(function () {
  var $links = $('a');
  $links
    .css({
      color: 'white',
      'text-decoration': 'none'
    })
    .attr('href', 'http://www.facebook.com/');
});

//25:30
