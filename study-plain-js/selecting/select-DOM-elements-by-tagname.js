// Select elements by tag name

// getElementsByTagName - a fast and cross browser safe way for selecting DOM elements by tag name, e.g. "div", "a", "span", etc.

// The getElementsByTagName() method is supported in all major browsers and returns a collection of elements with the given tag name as a NodeList. Example:

var list = document.getElementsByTagName('a');

// get the number of selected elements
console.log(list.length);

// iterate over elements and output href attribute values
for (var i=0; i<list.length; i++)
    console.log(list[i].href);
// As with getElementById(), it's possible to select elements by tag name within another container:

// var container = document.getElementById('header');
// var list = container.getElementByTagName('a');
// The method is very fast, but due to the limitation of selecting elements only by tag name, its usefulness is limited. querySelectorAll() is a convenient method for accessing DOM elements by almost arbitrary CSS selectors.

