console.time('test');
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
    }) // multiple css properties can be added using an object
    .attr('href', 'http://www.facebook.com/');

  $('body').append('<div>This div element with content appended with jQuery!</div>');

  // $links.remove(); // this method removes DOM element (but it sill remains in memory) ...
  // $('body').append($links); //  ... so after deleting, exact this same element can be attached to document again

  $links.on('click', function () {
    alert('test');
  });

  $('body').append('<p class="jQuery_p">This p and its class generated with jQuery. Click on it to get alert.</p>');
  var $p1 = $('.jQuery_p');
  $p1.on('click', function () { // .on - this method adds event handler
    alert('Handler, added with jQuery function');
  });
  $p1.off('click'); // .off - this method removes specified events)
  $p1.one('click', function () { // .one - this method causes event to trigger only one time
    console.log('Triggered one time.');
  });
  $p1.click(function () { // old method of adding event listener
    console.log('Old method of adding an event');
  });
  $p1.hover(function () { // very cool method .hover accpets two parameters - handler in, and handler out ()
    $p1.css('color', 'purple');
  }, function () {
    $(this).css('color', 'pink'); // $(this) - can be used aswell. actually it is even better
  });

  var $te = $('.test_element');

  $te.on('click dblclick', // couple of event listeners can be added simultaneously
   function (event) {
    console.log('Multiple event listeners were added simultaneosly');
  });

  $te.on('click', function (event) {
    $(this).animate({
      opacity: 0
    }, 2000, function () {
      console.log('animation completed');
    });
  });

});

console.timeEnd('test');
