// Get siblings of an element

// Get the next, previous or all siblings of an element or retrieve siblings that match a given selector.

// A helper function for fetching all siblings for a given DOM element -  or a filtered set of them:

function getSiblings(el, filter) {
    var siblings = [];
    el = el.parentNode.firstChild;
    do { if (!filter || filter(el)) siblings.push(el); } while (el = el.nextSibling);
    return siblings;
}

// example filter function
function exampleFilter(el) {
    return elem.nodeName.toLowerCase() == 'a';
}

// usage
el = document.querySelector('div');
// get all siblings of el
var sibs = getSiblings(el);
// get only anchor element siblings of el
var sibs_a = getSiblings(el, exampleFilter);
There are faster DOM methods for only getting the previous or next sibling of an element:

var previous = el.previousSibling;
var next = el.nextSibling;
Get all following siblings of an element, optionally filtered:

// this helper accepts a filter function as shown above: "exampleFilter()"
function getNextSiblings(el, filter) {
    var siblings = [];
    while (el= el.nextSibling) { if (!filter || filter(el)) siblings.push(el); }
    return siblings;
}
Get all preceding siblings of an element, optionally filtered:

// this helper accepts a filter function as shown above: "exampleFilter()"
function getPreviousSiblings(el, filter) {
    var siblings = [];
    while (el = el.previousSibling) { if (!filter || filter(el)) siblings.push(el); }
    return siblings;
}