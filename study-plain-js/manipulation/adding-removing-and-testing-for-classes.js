// Adding, removing, and testing for classes

// addClass, removeClass, hasClass - three important functions for working with DOM element classes.

// There are convenient methods for manipulating an element's class attribute: classList.add(), classList.remove() and classList.contains(). Unfortunately, browser support is not sufficient at the time of this writing. Therefore, we need to make use of short helper function that correspond to the jQuery methods $.addClass(), $.removeClass() and $.hasClass():

function hasClass(el, className) {
    return el.classList ? el.classList.contains(className) : new RegExp('\\b'+ className+'\\b').test(el.className);
}

function addClass(el, className) {
    if (el.classList) el.classList.add(className);
    else if (!hasClass(el, className)) el.className += ' ' + className;
}

function removeClass(el, className) {
    if (el.classList) el.classList.remove(className);
    else el.className = el.className.replace(new RegExp('\\b'+ className+'\\b', 'g'), '');
}
// How to use these helper functions:

var el = document.querySelector('div');
if (!hasClass(el, 'foo')) addClass(el, 'foo');
// If you intend to make thousands and thousands of class manipulations, you could take a slightly different and better performing approach that involves a bit more code:

var hasClass, addClass, removeClass;

if ('classList' in document.documentElement) {
    hasClass = function (el, className) { return el.classList.contains(className); };
    addClass = function (el, className) { el.classList.add(className); };
    removeClass = function (el, className) { el.classList.remove(className); };
} else {
    hasClass = function (el, className) {
        return new RegExp('\\b'+ className+'\\b').test(el.className);
    };
    addClass = function (el, className) {
        if (!hasClass(el, className)) { el.className += ' ' + className; }
    };
    removeClass = function (el, className) {
        el.className = el.className.replace(new RegExp('\\b'+ className+'\\b', 'g'), '');
    };
}
// If required, it should be a simple task to create a toggleClass() function. We leave this up to the reader :-)