var toLocalStorage = require('../js/app.js');

var foo = function() {
  return 1 + 2;
};
var bar = function() {
  return a + 1;
};

localStorage = {
  items: {},
  setItem(name, item) {
    this.items[name] = item;
  },
  getItem(name) {
    return this.items;
  }
};

describe("toLocalStorage", function () {

  it ('createAnswersList', function () {
    var result;
    result = toLocalStorage.createAnswersList();
    expect(result).toEqual('created answers list');
  });

  it ('addQuestions', function () {
    var result;
    result = toLocalStorage.addQuestions();
    expect(result).toEqual('questions added');
  });

  it ('generateQuiz', function () {
    var result;
    result = toLocalStorage.generate();
    expect(result).toEqual('testQuiz succesfully created');
  });


  it ('Questions array check', function () {
    expect(toLocalStorage.questions).toBeDefined();
  });

  it('Answers array check', function () {
    expect(toLocalStorage.answers).toBeDefined();
  });

  it('checking of questions quantity', function () {
    expect(toLocalStorage.numQuestions).toBe(3);
  });

});
