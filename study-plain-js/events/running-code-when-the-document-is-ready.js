// Running code when the document is ready

// A page can't be manipulated safely until the document is "ready." Here's how to make sure code isn't run prematurely.

// This function is the equivalent of jQuery's $(document).ready() method:

document.addEventListener('DOMContentLoaded', function(){
    // do something
});
// However, in contrast to jQuery, this code will only run properly in modern browsers (IE > 8) and it won't in case the document is already rendered at the time this script gets inserted (e.g. via Ajax). Therefore, we need to extend this a little bit:

 

function run() {
    // do something
}

// in case the document is already rendered
if (document.readyState!='loading') run();
// modern browsers
else if (document.addEventListener) document.addEventListener('DOMContentLoaded', run);
// IE <= 8
else document.attachEvent('onreadystatechange', function(){
    if (document.readyState=='complete') run();
});
// This covers basically all possibilities and is a viable replacement for the jQuery helper.