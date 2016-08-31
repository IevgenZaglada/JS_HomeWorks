define(
  'module2',
  ['jquery'],
  function () {
    var abc = 123;

    return {
      sayHelloToDima: function () {
        console.log('Hello, Dima');
      }
    };
  }
);
