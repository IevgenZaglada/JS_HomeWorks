var pow = require('../js/app.js');

describe("Function pow", function() {
  it("Проверка возведения в положительную степень", function() {
  	var result;
  	result = pow(4,2);
    expect(result).toBe(16);
  });
    it("Проверка возведения в отрицательную степень", function() {
  	var result;
  	result = pow(2,-3);
    expect(result).toBe(0.125);
  });
    it("Проверка возведения в степень, равную 0", function() {
  	var result;
  	result = pow(3,0);
    expect(result).toBe(1);
  });
});