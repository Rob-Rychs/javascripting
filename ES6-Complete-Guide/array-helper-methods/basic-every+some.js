// .every and .some condenses array down to true or false value based on condition
var names = [
  'Alexabdria',
  'Matthew',
  'Joe'
];

names.every(function(name) {
	return name.length > 4;
});

names.some(function(name) {
	return name.length > 4;
});