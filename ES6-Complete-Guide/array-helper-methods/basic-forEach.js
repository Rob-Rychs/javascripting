var colors = [ 'red', 'blue', 'green' ];

// the classic for loop
for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// every array helper method is going to help with iteration over an array
colors.forEach(function(color) {
  console.log(color);
});
// the above function(color){} is an anonymous iterator function (runs once for each element in the aray)