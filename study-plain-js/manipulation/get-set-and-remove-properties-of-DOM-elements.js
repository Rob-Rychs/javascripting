// Select the children of an element

// Getting the children of a DOM element.

// Selecting the children of an element with DOM methods:

var el = document.querySelector('div');

var children = el.childNodes,
    number_of_children = children.length;

for (var i=0; i<number_of_children; i++)
    console.log(children[i].innerHTML);
// There are faster methods for only fetching the first or last child of an element:

var firstChild = el.firstChild;
var lastChild = el.lastChild;