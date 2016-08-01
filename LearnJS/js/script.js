(function ($) {

$.fn.greenify = function (options) {

  var settings = $.extend({
    color: 'rgb(62, 82, 150)',
    backgroundColor: 'rgb(193, 156, 101)'
  }, options);

  return this.css({
    color: settings.color,
    backgroundColor: settings.backgroundColor
  });
};
}(jQuery));


$('div').greenify({
  color: 'orange',
  backgroundColor: 'pink'
}).animate({
  // 'opacity': 0.25
});
