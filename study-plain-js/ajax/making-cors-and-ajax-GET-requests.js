// Making CORS Ajax GET requests

// Asynchronous loading of data from a server in a different domain with modern browsers.

// Retrieving data asynchronously from a server in a different domain in vanilla JavaScript is straight forward and very similar to same-origin Ajax GET requests. The following helper works in modern browsers and Internet Explorers 9+:

function getCORS(url, success) {
    var xhr = new XMLHttpRequest();
    if (!('withCredentials' in xhr)) xhr = new XDomainRequest(); // fix IE8/9
    xhr.open('GET', url);
    xhr.onload = success;
    xhr.send();
    return xhr;
}

// example request
getCORS('http://foo.bar/?p1=1&p2=Hello+World', function(request){
    var response = request.currentTarget.response || request.target.responseText;
    console.log(response);
});
// Instead of onreadystatechange, the onload callback is used in CORS for receiving the returned data. The callback gets passed as single argument, the request object. Depending on the browser, the actual response is found in currentTarget.response or target.responseText.