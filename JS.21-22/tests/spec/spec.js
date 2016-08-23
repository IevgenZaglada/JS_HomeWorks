var app = require('../js/app.js');

describe("app", function() {
  xit("sayHello()", function() {
    var result;
    console.log('Unit testing', app);

    result = app.sayHello('Vasya');

    expect(result).toEqual('Hello, Vasya');
    // expect(result).not.toBeUndefined('Hello, Vasya');
  });

  it('sum()', function () {
    var result;

    result = app.sum(1, 2);

    expect(result).toEqual(3);
  });
});
