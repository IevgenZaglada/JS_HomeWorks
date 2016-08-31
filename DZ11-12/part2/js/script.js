$(function() {
	var html = $('#aboutMe').html();

	var data = {
		title: 'Заглада Евгений Николаевич',
		image: 'img/photo.jpg',
		text: 'Работал в компании "Вижн Медиа"',
		motivation: 'Хочу учить FrontEnd, потому что:',
		list: [
		{
			reason: 'Нету развития'
		}, 
		{
			reason: 'Маленькая зарплата'
		}, 
		{
			reason: 'Хочется работать головой'
		}
		],
		myPhone: 'Мой контактний телефон',
		myNumber: '+38 068 131 2029',
		myVK: 'Мой профиль вконтакте',
		linkVK: 'vk.com',
		feedback: 'Мой фидбек:',
		text1: 'Хочется заниматься разработкой сайтов. Я верю, что смогу это делать с Вашей помощью'
		};

	var content = tmpl(html, data);
	$('body').append(content);

});