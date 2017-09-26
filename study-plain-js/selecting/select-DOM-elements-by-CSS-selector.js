// Select DOM elements by CSS selector

// querySelectorAll - a CSS selector method like the one provided by jQuery.

// querySelectorAll() returns a list of DOM elements that match a given CSS selector. If you have ever used jQuery to select an element, you know how to make use of this method:


var matches = document.querySelectorAll('div.foo');

for (i=0; i<matches.length; i++)
    console.log(matches[i].innerHTML);

    // In the example, a NodeList of all <div> tags that have the class "foo" assigned is fetched. If no element matches the given selector, n empty NodeList is returned. The method works with basically any CSS selector, just like jQuery's $(...) method. Cross browser support is great; IE 8 is limited to CSS 2.1 selectors and it has issues with some unrecognized HTML5 tags. Other examples:

// select all div tags + link tags with the class "info"
var matches = document.querySelectorAll("div, a.info");

// select all text input fields
var matches = document.querySelectorAll("input[type='text']");

// As you can see, it's exactly what jQuery's selector engine does for you - only faster and no extra library required. In addition, there's an even faster method available for fetching only the first matching element:

var match = document.querySelector('div.foo');

// equals for the matched element
var match = document.querySelectorAll('div.foo')[0];

// Shortcut functions for less typing

// querySelectorAll() and querySelector() are great, just not to type. So, simply create your own helper functions:

// select a list of matching elements, context is optional
function $(selector, context) {
    return (context || document).querySelectorAll(selector);
}

// select the first match only, context is optional
function $1(selector, context) {
    return (context || document).querySelector(selector);
}


// how to use

// select all '.bar' elements inside all '.foo' containers
var matches = $('.foo .bar');

// context example
var container = $1('.foo');
// select '.bar' elements inside this one container
var matches = $('.bar', container);

// By doing so, you can use $(...) to fetch elements just like you would with jQuery; you can even pass in a context element. The jQuery documentation provides a complete list of available selectors. Warning: jQuery's Extensions selectors are not part of the CSS specification and consequently do not work with querySelectorAll().