// Getting, setting, and removing attributes

// getAttribute, setAttribute, removeAttribute - modify attributes, such as id, alt, title and more.

// In vanilla JavaScript an attribute's value can be read with the getAttribute() method:

// read the title of an element
var el = document.querySelector('img');
console.log(el.getAttribute('title'));
// Setting an attribute or modifying it's current value is done via the element's setAttribute() method:

// set the alt attribute of an element
var el = document.querySelector('img');
el.setAttribute('alt', 'Hello World!');
// Make use of the removeAttribute() method to erase an attribute from the element:

el.removeAttribute('alt');
// Handling data attributes of an element is also done with these methods. This is described in "Setting, getting, and removing data attributes".

// Although an element's class attribute is accessible, as well, there are extra methods for working with classes.

