for (var i = 0; i < 4; i++ ){
var $size = Math.floor(Math.random() * 100) + 1;
console.log($size);
}
$(document).ready(function () {
$('.one').width($size).height($size);
$('.two').width($size).height($size);
$('.three').width($size).height($size);
$('.four').width($size).height($size);
});
