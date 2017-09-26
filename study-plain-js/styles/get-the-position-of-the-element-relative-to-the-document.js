// Get the position of an element relative to the document

// Get the current top/left coordinates of an element relative to the document.

// To get the top and left position of an element relative to the document, we first determine the X/Y coordinates of an element on the screen via getBoundingClientRect(). We then add scroll top/left position to these coordinates. Helper function:

function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

// example use
var div = document.querySelector('div');
var divOffset = offset(div);
console.log(divOffset.left, divOffset.top);
// The result of this helpers is equal to jQuery's $.offset(). getBoundingClientRect() is a very useful, cross browser safe method that returns top, right bottom, and left position of any element relative to the viewport.