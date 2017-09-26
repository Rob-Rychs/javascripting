// Preventing the default action or bubbling of events

// How to cancel an event or preventing it from bubbling up the DOM tree.

// jQuery offers two useful methods that may be called within events handlers in order to stop the event from happening: e.preventDefault() and e.stopPropagation()

// In fact, both are plain JavaScript methods that are available on the event object of any handler function:

function handler(e) {
    // stop the immediate action of this event
    e.preventDefault();

    // prevent the event fro bubbling up
    e.stopPropagation();
}

// attach handler to the keydown event of the document
if (document.attachEvent) document.attachEvent('onkeydown', handler);
else document.addEventListener('keydown', handler);
// Returning false from an event handler has in most cases the same effect as calling those methods, but there are exceptions, such as form submissions (submit event).

