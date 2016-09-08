function Human(data) {
	this.name = data.name;
	this.age = data.age;
	this.gender = data.gender;
	this.height = data.height;
	this.weight = data.weight;
}

function Worker(data) {
	Human.apply(this, [data]);
	this.placeOfWork = data.placeOfWork;
	this.salary = data.salary;
}

function Student(data) {
	Human.apply(this, [data]);
	this.placeOfStudy = data.placeOfStudy;
	this.grant = data.grant;
}

Worker.prototype = Object.create(Human.prototype);
Worker.prototype.constructor = Worker;
Worker.prototype.toWork = function() {
	console.log(this.name + ' is working');
}

Student.prototype = Object.create(Human.prototype);
Student.prototype.constructor = Student;
Student.prototype.toWatch = function() {
	console.log(this.name + ' is watching movies');
}

var Anna = {
	name: 'Anna',
	age: 20,
	gender: 'female',
	height: 165,
	weight: 60,
	placeOfWork: 'Kyivstar',
	salary: 8000,
	placeOfStudy: 'KNU',
	grant: 800
};

var Irina = {
	name: 'Irina',
	age: 30,
	gender: 'female',
	height: 177,
	weight: 70,
	placeOfWork: 'EPAM',
	salary: 30000,
	placeOfStudy: 'KPI',
	grant: 700
};

var Andriy = {
	name: 'Andriy',
	age: 28,
	gender: 'male',
	height: 180,
	weight: 75,
	placeOfWork: 'Roshen',
	salary: 25000,
	placeOfStudy: 'KNEU',
	grant: 1000
};

var Petro = {
	name: 'Petro',
	age: 18,
	gender: 'male',
	height: 195,
	weight: 100,
	placeOfWork: 'kyivenergo',
	salary: 3000,
	placeOfStudy: 'NAU',
	grant: 700
};



var worker = new Worker (Andriy);
var student = new Student (Anna);
var worker1 = new Worker (Irina);
var student1 = new Student (Petro);

console.log(worker);
console.log(student);
console.log(worker1);
console.log(student1);

worker.toWork();
student.toWatch();
worker1.toWork();
student1.toWatch();