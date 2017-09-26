// Load a script file asynchronously

// How to load a JavaScript file asynchronously from the server and automatically execute it.

// Loading an external script asynchronously is simple. Create a script tag, set its src attribute, and inject it into the DOM tree:

var script = document.createElement('script'),
    scripts = document.getElementsByTagName('script')[0];
script.src = url;
scripts.parentNode.insertBefore(script, scripts);
// The returned JavaScript file is executed automatically by the browser. Loading the Facebook Like button and Google Analytics are two examples that make use of this technique. Tip: When such script files are requested on page load, it's recommended to use a standard script tag with the async (and defer) attribute included:

<script src="https://platform.twitter.com/widgets.js" async defer></script>
// The HTML5 attribute async tells the browser to load this script without blocking the page. defer does essentially the same, but works on several older browsers, too.

