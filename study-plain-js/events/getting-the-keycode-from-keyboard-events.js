// Getting the keycode from keyboard events

// Binding an event handler to keyboard actions and retrieving the keycode that triggered the event.

// To get the key code, attaching an event handler to any keyboard action is required. The key code is reported on the event object received by the handler function.

// event handler function
function handler(e) {
    var key = window.event ? e.keyCode : e.which;
    console.log(key, e.shiftKey, e.altKey, e.ctrlKey);
}

// attach handler to the keydown event of the document
if (document.attachEvent) document.attachEvent('onkeydown', handler);
else document.addEventListener('keydown', handler);
// It's possible to use any of the keyboard events (keypress, keydown, keyup) on DOM elements, such as text input fields or textareas.