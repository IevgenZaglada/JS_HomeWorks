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


function Human(info) {
  this.name = info.name;
  this.age = info.age;
  this.state = info.state;
  this.height = info.height;
  this.weight = info.weight;
}

function Worker(info) {
  this.work = info.work;
  this.salary = info.salary;
  this.toWork = function () {
    console.log('i am working');
  };
}

function Student(info) {
  this.university = info.university;
  this.scholarship = info.scholarship;
  this.watchMovies = function () {
    console.log('i am watching movies');
  };
}

Worker.prototype = new Human({});
Student.prototype = new Human({});

var dima = new Worker({
  name: 'dima',
  age: 24,
  work: 'programmer'
});

console.log(dima);

var dimas = new Human ({
  name: 'dima',
});

console.log(dimas);












// var dima = new Worker({
//   work: 'programmer',
//   salary: 500000,
//   // toWork: toWork()
// });
//
// console.log(dima);

// var dima = new Human({
//   name: 'Dima',
//   age: 24,
//   state: 'male',
//   height: 189,
//   weight: 70
// });
//
// console.log(dima);









// var workerReneDekart = new Worker();
// var workerAristotel = new Worker();
// var workerPlaton = new Worker();
//
// var studentBradPit = new Student();
// var studentNeo = new Student();
// var studentJustinBieber = new Student();
//
// console.log('Rene Descartes:', workerReneDekart.name);
// console.log('Aristotel:', workerAristotel.age);
// console.log('Brad Pit:',studentBradPit.state);
// console.log('Justin Bieber:', studentJustinBieber.height);
