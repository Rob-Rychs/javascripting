// Getting width and height of an element

// Get the current computed dimension of an element, with or without borders and margins

// The following figure shows the CSS box model: a block element with content, padding, border, and margin:
MARGIN
BORDER
PADDING
`------`
CONTENT

// CSS Box Model

// Use the following methods to get width and height of each of those boxes:

var box = document.querySelector('div');

// width and height in pixels, including padding and border
// Corresponds to jQuery outerWidth(), outerHeight()
var width = box.offsetWidth;
var height = box.offsetHeight;

// width and height in pixels, including padding, but without border
// Corresponds to jQuery innerWidth(), innerHeight()
var width = box.clientWidth;
var height = box.clientHeight;
The margin of an element is calculated from its computed style:

var style = window.getComputedStyle ? getComputedStyle(el, null) : el.currentStyle;

var marginLeft = parseInt(style.marginLeft) || 0;
var marginRight = parseInt(style.marginRight) || 0;
var marginTop = parseInt(style.marginTop) || 0;
var marginBottom = parseInt(style.marginBottom) || 0;
// The computed style may be used to read other properties, too. For example border width:

var borderLeft = parseInt(style.borderLeftWidth) || 0;
// Getting the window width and height is done differently. Just like in jQuery, the above presented methods do not work on the window or document object. Use this instead:

var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
