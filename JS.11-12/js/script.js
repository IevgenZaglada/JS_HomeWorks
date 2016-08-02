$(function () {
  var html = $('#userProfile').html();
  var profileData = [{
    title: 'ASDFASDFASDFASDFASDFASDFASDFASDFASDFASDFASDFASDFASDFASDFASDF',
  }];
  var content = tmpl(html,{data: profileData});
});
$('.content').append(content);


//
// var html =  $('#userProfile').html();
// var articles =  [
//   {
//     title: 'Article 1',
//     content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
//   },
//   {
//     title: 'Article 2',
//     content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
//   },
//   {
//     title: 'Article 3',
//     content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
//   }
// ];
// var content = tmpl(html,{
//   data: articles
// });
// $('body').append(content);
