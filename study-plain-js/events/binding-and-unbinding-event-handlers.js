// Binding and unbinding of event handlers

// How to attach or detach a handler function to an event, such as click, focus, or submit.

// Modern browsers support addEventListener() and removeEventListener() for adding or removing event handlers; IE 8 has its own methods. If you need to support both, use these little helpers as a replacement to jQuery's $.on() and $.off() methods:

function addEvent(el, type, handler) {
    if (el.attachEvent) el.attachEvent('on'+type, handler); else el.addEventListener(type, handler);
}
function removeEvent(el, type, handler) {
    if (el.detachEvent) el.detachEvent('on'+type, handler); else el.removeEventListener(type, handler);
// }
// How to use:

var el = document.querySelector('textarea');

// attach anonymous function to click event
addEvent(el, 'click', function(){ console.log('Clicked!'); })

// attach a named function
var foo = function(){ console.log('Focused!'); };
addEvent(el, 'click', foo);

// remove a previously attached function
removeEvent(el, 'click', foo);
// Anonymous functions used as event handler cannot be unbound. A reference to the function used for binding the event must be passed to removeEvent().

// It's not required to unbind event handlers when removing DOM elements. JavaScript's garbage collection will take care of it and free up the reserved memory.

// w3schools offers a useful list of available HTML DOM events. These are HTML attribute names; when binding/unbinding events with the above given helper function, omit the "on" prefix of the name to get the event type. For example, use "mouseup" instead of "onmouseup".

// Alternatively, you can also set the event attribute of an element directly. But it's only possible to assign one handler per element:

var el = document.querySelector('textarea');

// set callback
el.onblur = function(){ console.log('Blurred textarea'); };

// remove callback
delete el.onblur;

// assign handler to window object
window.onload = function(){ alert('Window has loaded.'); };
// Use the "on" prefix for setting and removing properties such as onblur or onclick of elements.

// Read up on how to live bind events in vanilla JavaScript.