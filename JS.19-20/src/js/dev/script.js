console.log(userData);


// 1

// Sorting out `skills` key

var sortSkills = _.map(userData, 'skills');

// Setting up one-level array

var keyFlat = _.flattenDeep(sortSkills);


// Alphabetical sorting

var flatSorted = _.sortBy(keyFlat);

// Sorting out duplciates

var sortedOutDuplcates = _.uniq(flatSorted);

console.log(sortedOutDuplcates);


//2

// 3

// Sotring out 'friends' key

var sortFriends = _.map(userData, 'friends');
console.log(sortFriends);

var friendsFlat = _.flattenDeep(sortFriends);

console.log(friendsFlat);
