// $(function () {
//   var html = $('#userProfile').html();
//   var profileData = [{
//     title: 'ASDFASDFASDFASDFASDFASDFASDFASDFASDFASDFASDFASDFASDFASDFASDF',
//   }];
//   var content = tmpl(html,{data: profileData});
// });
// $('.content').append(content);



var html =  $('#userProfile').html();
var articles =  [
  {
    title: 'I want to be a frontend developer becuase',
    listItemOne: 'It is really good to make something instead of breaking something ',
    listItemTwo: 'It is good to make things beautiful using high technologies.',
    listItemThree: 'Finally i`ll able to make a website with a content under restriction'
  },
  {
    title: 'My phone is: +3080930373861',
    content: 'Feel free to poke me at my VK profile.'
  },
  {
    title: 'My feedback:',
    content: 'I wish more offline meeting. Offline makes a party.'
  }
];
var content = tmpl(html,{
  data: articles
});
$('body').append(content);
