// JSONP Ajax requests

// JSONP allows asynchronous loading of data, even from servers in a different domain.

// JSONP is used for requesting data asynchronously from a server in a different domain:

// define a callback function, which accepts the returned JSON data as its only argument
function response(data) {
    // JSON data in form of a JavaScript object
    console.log(data);
}

// create a script tag with the external request URL
// include "response" as value of the GET param "callback" in the URL
var script = document.createElement('script');
script.src = 'https://foo.bar/api/?callback=response';
document.body.appendChild(script);
// The function "response" gets called as soon as the data is successfully retrieved. It accepts as its first and only argument the parsed JSON data returned form the server.

// In general it's recommended to use cross-origin resource sharing (CORS) for such requests instead (IE8+). Yet, JSONP is simple to implement and it's cross-browser safe.