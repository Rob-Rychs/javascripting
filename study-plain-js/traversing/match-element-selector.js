// Match element selector

// Check the current elements against a CSS selector.

// To check whether a given element matches a CSS selector, modern browsers support the matches() or matchesSelector() DOM method. Here's a polyfill for other browsers:

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
// Browsers supporting DOM4 make use of the optimized internal method, which is much faster. This is generally recommended when extending native objects. Now you can call matches() on any DOM element:

var el = document.querySelector('span');
console.log(el.matches('.foo'));