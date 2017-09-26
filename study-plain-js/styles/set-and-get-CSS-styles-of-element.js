// Set and get CSS styles of elements

// Get the computed style properties or set CSS properties for an element.

// The getComputedStyle() method (IE < 9: currentStyle property) corresponds to the rendered on-page style of an element after all stylesheets were applied. It can be accessed as follows:

var el = document.querySelector('div');

// getComputedStyle for modern browsers, currentStyle for IE
var style = window.getComputedStyle ? getComputedStyle(el, null) : el.currentStyle;

// reading properties
console.log(style.backgroundColor);

// reading properties containing hyphens
console.log(style['-webkit-text-size-adjust']);
// Setting style properties is done directly via the style property of an element:

var el = document.querySelector('div');

el.style.backgroundColor = 'green';
el.style.display = 'none';
el.style['border-radius'] = '5px';
// Multiple styles can be set at once by use of the cssText property:

el.style.cssText += 'background: green, display: none;';
// Note: The new style string is appended to the existing one (+=). Current style properties are overwritten and normalized. When overwriting the whole cssText, all previously set styles are discarded.

// However, this method is rather slow and therefore it's better to use instead a little helper for setting multiple styles by an object of key/value pairs:

function css(el, styles) {
    for (var property in styles)
        el.style[property] = styles[property];
}

// example
var el = document.querySelector('div');
css(el, { background: 'green', display: 'none', 'border-radius': '5px' });
// This helper function corresponds to jQuery's $.css(obj) method.

