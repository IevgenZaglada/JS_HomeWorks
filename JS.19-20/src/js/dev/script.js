// Sorting out `skills` unique keys, alphabetically arranged

var sortedSkills = _.sortBy(_.uniq(_.flatten(_.map(userData, 'skills'))));
console.log('Поле Skills, без повторений, сортировка по алфавиту: ', sortedSkills);

// Sorting namea sorted by quntity of friends

var sortedNames = _.map(_.sortBy(userData, 'friends'), 'name');
console.log('Имена, сортировка в зависимсоти от кол-ва друзей: ', sortedNames);

// All unique friends of all Users

var sortedFriends = _.uniq(_.map(_.flatten(_.map(userData, 'friends')), 'name'));
console.log('Массив всех друзей всех пользователей без повторений ', sortedFriends);
