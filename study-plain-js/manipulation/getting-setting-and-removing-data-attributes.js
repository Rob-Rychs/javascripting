// Setting, getting, and removing data attributes

// Read, write, or remove data values of an element.

// In vanilla JavaScript setting a data attribute of an element is done with the generic setAttribute() method. This is the equivalent of jQuery's $.data() method. Here's an example for setting and retrieving the attribute "data-foo":

// setting data-foo
var el = document.querySelector('div');
el.setAttribute('data-foo', 'Hello World!');
getAttribute() is used for reading the data attribute of an element:

// getting data-foo
var el = document.querySelector('img');
console.log(el.getAttribute('data-foo'));
Make use of the removeAttribute() method to delete the given data attribute:

el.removeAttribute('data-foo');
//  Apart from setting, getting, and erasing data values, all three methods are also used for manipulating other element attributes.

