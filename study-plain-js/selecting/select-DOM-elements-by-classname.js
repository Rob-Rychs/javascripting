// Select elements by class name

// getElementsByClassName - a fast way of selecting DOM elements by class name in modern browsers. Does not work in IE 8 and below.

// The getElementsByClassName() method returns a collection of elements with the given class name as a NodeList. It is supported in modern browsers. Internet Explorer has support for this method as of version 9. Example:

var list = document.getElementsByClassName('foo');

// get the number of selected elements
console.log(list.length);

// iterate over elements and output their HTML content
for (var i=0; i<list.length; i++)
    console.log(list[i].innerHTML);
As with getElementById(), it's also possible to select elements by class name within another container:

var container = document.getElementById('header');
var list = container.getElementsByClassName('foo');
// Warning: Watch out for the pitfall when looping through elements selected by class name and - at the same time - modifying the class attribute.

// The method is fast, but due to the limitation of selecting elements only by class name, its usefulness is limited. querySelectorAll() is a convenient method for accessing DOM elements by almost arbitrary CSS selectors.