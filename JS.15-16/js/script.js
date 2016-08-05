var $searchForm = $('.searchForm');
var $searchSubmit = $('.searchSubmit');
var $content = $('content');
var API_KEY = '3044055-26f05a0ce42eac2412c64079c';

(function ($) {

  $.fn.search = function () {

    $('a').remove();
    $('p').remove();

    $.ajax({
      url: "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent($searchForm.val()),
      dataType: 'jsonp',

      success: function (data) {
        if (parseInt(data.totalHits) > 0)
          $.each(data.hits, function (i, hit) {

            var image = hit.previewURL;
            var page = hit.pageURL;
            $content.append('<a href="' + page + '"><img class="foundImages" src="' + image + '"></a>');
          });
        else
          $content.append('<p>No images found.</p>');
      }
    });
  };
})(jQuery);

$searchForm.keydown(function (event) {
  if (event.keyCode == 13) {
    $searchSubmit.search();
  }
});

$searchSubmit.on('click', function () {
  $(this).search();
});




// prototyping

function Human() {
  this.name = 'Dima';
  this.age = 24;
  this.state = 'man';
  this.height = 176;
  this.weight = 80;
}

function Worker() {
  this.work = 'programmer';
  this.salary = '500.000 $';
  this.toWork = function () {
    console.log('i am working');
  };
}

function Student() {
  this.university = 'Harvard';
  this.scholarship = '100$';
  this.watchMovies = function () {
    console.log('i am watching movies');
  };
}

Worker.prototype = new Human();
Student.prototype = new Human();

var workerReneDekart = new Worker();
var workerAristotel = new Worker();
var workerPlaton = new Worker();

var studentBradPit = new Student();
var studentNeo = new Student();
var studentJustinBieber = new Student();

console.log('Rene Descartes:', workerReneDekart.name);
console.log('Aristotel:', workerAristotel.age);
console.log('Brad Pit:',studentBradPit.state);
console.log('Justin Bieber:', studentJustinBieber.height);
