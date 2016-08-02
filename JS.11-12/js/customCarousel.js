$(document).ready(function () {
  var leftUiEl = $('.carousel-arrow-left');
  var rightUiEl = $('.carousel-arrow-right');
  var elementsList = $('.carousel-list');

  var pixelsOffset = 125;
  var currentLeftValue = 0;
  var elementsCount = elementsList.find('li').length;
  var minimumOffset = -((elementsCount - 5) * pixelsOffset);
  var maximumOffset = 0;

  leftUiEl.click(function () {
    if (currentLeftValue != maximumOffset) {
      currentLeftValue += 125;
      elementsList.animate({
        left: currentLeftValue + 'px'
      }, 500);
    }
  });

  rightUiEl.click(function () {
    if (currentLeftValue != minimumOffset) {
      currentLeftValue -= 125;
      elementsList.animate({
        left: currentLeftValue + 'px'
      }, 500);
    }
  });
});
