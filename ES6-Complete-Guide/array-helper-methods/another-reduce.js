var primaryColors =[
  { color: 'red' },
  { color: 'yellow' },
  { color: 'blue' }
];

// return [ 'red', 'yellow', 'blue' ]

// here previous is the initial value assigned as an empty array as the second argument passed to .reduce
primaryColors.reduce(function(previous, primaryColor) {
  previous.push(primaryColor.color);
  return previous
}, []);