const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];
const fallColors = ['fire red', 'fall orange'];

// es5 concat two arrays together
defaultColors.concat(userFavoriteColors);
// es6 spread operator
[ ...defaultColors, ...userFavoriteColors ];
// removing the ... calls the original array inside the new one
[ ...defaultColors, userFavoriteColors ];
// use the spread to combine all three arrays
[ ...defaultColors, ...userFavoriteColors, ...fallColors ];
// can add in new items at the time you combine arrays
['blue', ...defaultColors, ...userFavoriteColors, ...fallColors ];

