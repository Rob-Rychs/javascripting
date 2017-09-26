// Live binding event handlers

// Attach an event handler for all elements which match a given selector, now and in the future.

// In order to bind event handlers automatically on any future elements of a matching selector, we make use of a little trick: Instead of binding to the element's event, we actually bind an event handler to the document. Events bubble up the tree and when the document's event handler is triggered, we check on the source of the event and see if it matches the live binding selector:

// helper for enabling IE 8 event bindings
function addEvent(el, type, handler) {
    if (el.attachEvent) el.attachEvent('on'+type, handler); else el.addEventListener(type, handler);
}

// live binding helper
function live(selector, event, callback, context) {
    addEvent(context || document, event, function(e) {
        var found, el = e.target || e.srcElement;
        while (el && !(found = el.id == selector)) el = el.parentElement;
        if (found) callback.call(el, e);
    });
}

// example use
live('foo', 'click', function(){ console.log('Clicked #foo'); });
// Warning: As it is, this is not a full substitute for jQuery's $.live() method: In the example, the live() function checks specifically if the ID of the clicked element matches "foo". Testing for any other selector requires a modification of the while statement el.id == elementId. You can alternatively check on class name or any other attribute/value.

// If you intend to bind only events that are triggered inside a specific container, simply pass the element node of the container as context argument to the live() function.

// When an arbitrary matching selector is required, use the following live binding function. It is a bit slower, but gives you the flexibility of jQuery's $.live() method:

// live binding helper with CSS selector
function live(selector, event, callback, context) {
    addEvent(context || document, event, function(e) {
        var qs = (context || document).querySelectorAll(selector);
        if (qs) {
            var el = e.target || e.srcElement, index = -1;
            while (el && ((index = Array.prototype.indexOf.call(qs, el)) === -1)) el = el.parentElement;
            if (index > -1) callback.call(el, e);
        }
    });
}
// Finally, here's a performance optimized version that makes use of modern DOM4 methods with a polyfill for older browsers:

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

// live binding helper using matchesSelector
function live(selector, event, callback, context) {
    addEvent(context || document, event, function(e) {
        var found, el = e.target || e.srcElement;
        while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
        if (found) callback.call(el, e);
    });
}
// This version could be even more optimized by using a proper closest() method instead of the while statement. We leave this task up to the reader.

// w3schools offers a useful list of available HTML DOM events. These are HTML attribute names; when binding an event with the above given helper function, omit the "on" prefix of the name to get the event type. For example, use "mouseup" instead of "onmouseup".