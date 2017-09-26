Get and set scroll position of an element

Get or set the horizontal and vertical scroll position of an element or the document.

Use the properties scrollTop and scrollLeft to get or set the scroll position of an element:

var el = document.querySelector('div');

// get scroll position in px
console.log(el.scrollLeft, el.scrollTop);

// set scroll position in px
el.scrollLeft = 500;
el.scrollTop = 1000;
Getting the scroll position of the document in px.

var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
Setting the document scroll position of the document in px:

document.documentElement.scrollTop = document.body.scrollTop = 1000;
document.documentElement.scrollLeft = document.body.scrollLeft = 500;
