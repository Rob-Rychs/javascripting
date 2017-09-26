// Get closest element by selector

// Get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.

// closest(), the analog to jQuery's $.closest(), is an element method introduced in DOM4 and supported by modern browsers, such as Firefox and Chrome. Here's a polyfill for Internet Explorer and other browsers without native support:

// matches polyfill
this.Element && function(ElementPrototype) {
    ElementPrototype.matches = ElementPrototype.matches ||
    ElementPrototype.matchesSelector ||
    ElementPrototype.webkitMatchesSelector ||
    ElementPrototype.msMatchesSelector ||
    function(selector) {
        var node = this, nodes = (node.parentNode || node.document).querySelectorAll(selector), i = -1;
        while (nodes[++i] && nodes[i] != node);
        return !!nodes[i];
    }
}(Element.prototype);

// closest polyfill
this.Element && function(ElementPrototype) {
    ElementPrototype.closest = ElementPrototype.closest ||
    function(selector) {
        var el = this;
        while (el.matches && !el.matches(selector)) el = el.parentNode;
        return el.matches ? el : null;
    }
}(Element.prototype);
// Browsers supporting DOM4 make use of the optimized internal method, which is much faster. This is generally recommended when extending native objects. Now you can call closest() on any DOM element, just like in jQuery:

var el = document.querySelector('span');
console.log(el.closest('div'));