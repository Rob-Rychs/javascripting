// Getting the current mouse position

// How to get the current mouse position on mouse move or click.

// To get the current position of the mouse, attaching an event handler to any mouse action is required. The mouse's position is reported on the event object received by the handler function.

// event handler function
function handler(e) {
    e = e || window.event;

    var pageX = e.pageX;
    var pageY = e.pageY;

    // IE 8
    if (pageX === undefined) {
        pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }

    console.log(pageX, pageY);
}

// attach handler to the click event of the document
if (document.attachEvent) document.attachEvent('onclick', handler);
else document.addEventListener('click', handler);
// [Read](http://www.jacklmoore.com/notes/mouse-position/) Jack Moore's well written article about cross-browser mouse positioning to learn more details and options about this topic.