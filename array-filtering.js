// array of numbers 1-10
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var filtered = numbers.filter(function evenNumbers (number) {
	return number % 2 === 0;
});
// function filtered() returns the numbers array filtered by the function evenNumbers() with .filter()
// function evenNumbers() accepts a number as an argument and  returns it if it's divisible by two
console.log(filtered); // logs [2, 4, 6, 8, 10]