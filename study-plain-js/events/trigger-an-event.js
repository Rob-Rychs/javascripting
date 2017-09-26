// Trigger an event

// How to create and dispatch events. Corresponding functions to jQuery's $.trigger(), $.click(), $.blur(), $.keyup(), $.mousedown(), etc.

// There are a few convenient methods for triggering an event on specific elements:

var el = document.querySelector('input[type="text"]');

// for any element
el.click();

// for inputs and textareas
el.focus();
el.blur();

// for form elements
var my_form = document.querySelector('form');

my_form.submit();
my_form.reset();
// In contrast to jQuery, it is not possible to pass an event handler as argument to any of these methods. Read up on binding event handlers in plain JavaScript.

// If you need to trigger other events, such as mousedown or keyup, use the following helper function:

function triggerEvent(el, type){
   if ('createEvent' in document) {
        // modern browsers, IE9+
        var e = document.createEvent('HTMLEvents');
        e.initEvent(type, false, true);
        el.dispatchEvent(e);
    } else {
        // IE 8
        var e = document.createEventObject();
        e.eventType = type;
        el.fireEvent('on'+e.eventType, e);
    }
}
Usage example:

var el = document.querySelector('input[type="text"]');
triggerEvent(el, 'mousedown');
// w3schools offers a useful list of available HTML DOM events. These are HTML attribute names; when triggering an event with the above given helper function, omit the "on" prefix of the name to get the event type. For example, use "mouseup" instead of "onmouseup".

// With triggerEvent() you may also dispatch any custom event that is bound to the element.

