define(
  'module1', //name
  [], //dependencies
  function () {

    var abc = 123;

    return {
      sayHello: function () {
        console.log('Hello, World!');
      }
    };
  }
);
