describe('pow', function () {

  it('При возведении в отрицательную степень - результат NaN', function () {
    assert(isNaN(pow(2, -1)), 'pow(2, -1) не NaN');
  });

  it('При возведении в дробную степень результат NaN', function () {
    assert(isNaN(pow(2, 1.5)), 'pow(2, 1.5) не NaN');
  });

  it("ноль в нулевой степени даёт NaN", function () {
    assert(isNaN(pow(0, 0)), "0 в степени 0 не NaN");
  });

  describe('Возводит х в степень n', function () {

    it('При возведении 2 в 3ю степень результат 8', function () {
      assert.equal(pow(2, 3), 8);
    });

    it('При возведении 3 в 4ю степерь результат 81', function () {
      assert.equal(pow(3, 4), 81);
    });

    // automation test with FOR loop

    function auto(x) {
      var expected = x * x * x;
      it('При возведении ' + x + ' в степень 3 результат: ' + expected, function () {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (var x = 1; x <= 5; x++)
      auto(x);

  });
});


describe("Тест", function () {

  before(function () {
    console.log("Начало тестов");
  });
  after(function () {
    console.log("Конец тестов");
  });

  beforeEach(function () {
    console.log("Вход в тест");
  });
  afterEach(function () {
    console.log("Выход из теста");
  });

  it('тест 1', function () {
    console.log('1');
  });
  it('тест 2', function () {
    console.log('2');
  });

});
