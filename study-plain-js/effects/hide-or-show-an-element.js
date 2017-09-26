// Hide or show an element

// Toggle an element's display property for rendering it visible or invisible.

// Showing and hiding an element can be achieved by toggling its display style:

var el = document.querySelect('div');

// hide
el.style.display = 'none';

// show
el.style.display = '';
// or if the div element is hidden by default via CSS stylesheet
el.style.display = 'block';
// However, creating a function, such as $.show() and $.hide() in jQuery, requires a bit more than that. Hiding an element is always done by setting its display style to 'none'. Showing an element is more difficult, because this functionality must take into account stylesheet rules, as well as the default display style of an element. E.g. a span has inline as its default display value. Setting it to block is wrong.

// The following helpers are quite convenient, but in order to keep things simple, the show() function requires an additional argument; the target display value of the element (block, inline-block, inline, etc.):

function hide(el) {
    el.style.display = 'none';
}

function show(el, value) {
    el.style.display = value;
}

function toggle(el, value) {
    var display = (window.getComputedStyle ? getComputedStyle(el, null) : el.currentStyle).display;
    if (display == 'none') el.style.display = value;
    else el.style.display = 'none';
}
// toggle() can be used to switch between visible and invisible. If you don't want to or cannot pass in the target display value manually, it gets more complicated. The following helpers are basically vanilla JavaScript clones of jQuery's $.show() and $.hide(). For these functions to work, it's required to store the initial/default display style of an element. For this, the data attribute "olddisplay" is used:

// get the default display style of an element
function defaultDisplay(tag) {
    var iframe = document.createElement('iframe');
    iframe.setAttribute('frameborder', 0);
    iframe.setAttribute('width', 0);
    iframe.setAttribute('height', 0);
    document.documentElement.appendChild(iframe);

    var doc = (iframe.contentWindow || iframe.contentDocument).document;

    // IE support
    doc.write();
    doc.close();

    var testEl = doc.createElement(tag);
    doc.documentElement.appendChild(testEl);
    var display = (window.getComputedStyle ? getComputedStyle(testEl, null) : testEl.currentStyle).display
    iframe.parentNode.removeChild(iframe);
    return display;
}

// actual show/hide function used by show() and hide() below
function showHide(el, show) {
    var value = el.getAttribute('data-olddisplay'),
    display = el.style.display,
    computedDisplay = (window.getComputedStyle ? getComputedStyle(el, null) : el.currentStyle).display;

    if (show) {
         if (!value && display === 'none') el.style.display = '';
         if (el.style.display === '' && (computedDisplay === 'none')) value = value || defaultDisplay(el.nodeName);
    } else {
        if (display && display !== 'none' || !(computedDisplay == 'none'))
            el.setAttribute('data-olddisplay', (computedDisplay == 'none') ? display : computedDisplay);
    }
    if (!show || el.style.display === 'none' || el.style.display === '')
        el.style.display = show ? value || '' : 'none';
}

// helper functions
function show(el) { showHide(el, true); }
function hide(el) { showHide(el); }
// It's a convenient and useful function, but it does involve a rather large chunk of code. So, you might be better off setting the display style of an element manually as shown above.

