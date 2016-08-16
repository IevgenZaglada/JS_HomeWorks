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
  Human.apply(this, [info]);
  this.company = info.company;
  this.work = info.work;
  this.salary = info.salary;
}

function Student(info) {
  Human.apply(this, [info]);
  this.university = info.university;
  this.scholarship = info.scholarship;
  }

Worker.prototype = Object.create(Human.prototype);
Worker.prototype.constructor = Worker;
Worker.prototype.toWork = function() {
    console.log(this.name + ' is working.');
};

Student.prototype = Object.create(Human.prototype);
Student.prototype.constructor = Student;
Student.prototype.toWatch = function () {
  console.log(this.name + ' is watching moves.');
};

var dima = {
  name: 'Dima',
  age: 24,
  state: 'male',
  height: 180,
  weight: 80,
  work: 'programmer',
  company: 'Google',
  salary: 500000
};

var dimas = {
  name: 'Dimas',
  age: 24,
  state: 'male',
  height: 180,
  weight: 80,
  university: 'Harvrad',
  scholarship: 1000
};

var kate = {
  name: 'Kate',
  age: 28,
  state: 'female',
  height: 177,
  weight: 75,
  work: 'BI',
  company: 'Apple',
  salary: 120000,
  university: 'Yale',
  scholarship: 1200
};

var jane = {
  name: 'Jane',
  age: 22,
  state: 'female',
  height: 170,
  weight: 65,
  work: 'Data analyst',
  company: 'Facebook',
  salary: 120000,
  university: 'Brooklyn',
  scholarship: 900
};

var engineerDima = new Worker (dima);
var studentDiam = new Student (dimas);
var biKate = new Worker (kate);
var dataAnalystJane = new Worker (jane);

console.log(engineerDima);
console.log(studentDiam);
console.log(biKate);
console.log(dataAnalystJane);

engineerDima.toWork();
studentDiam.toWatch();
