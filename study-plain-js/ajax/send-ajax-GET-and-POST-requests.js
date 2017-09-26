// Send Ajax GET and POST requests

// Load data asynchronously from the server using GET or POST HTTP requests. Set data type (xml, json, script, text, html) and decode returned data.

// The following helper function allows sending an Ajax request via GET method - an equivalent to jQuery's $.get(). Its url argument must contain the full request path including all GET parameters:

function getAjax(url, success) {
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    xhr.open('GET', url);
    xhr.onreadystatechange = function() {
        if (xhr.readyState>3 && xhr.status==200) success(xhr.responseText);
    };
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.send();
    return xhr;
}

// example request
getAjax('http://foo.bar/?p1=1&p2=Hello+World', function(data){ console.log(data); });
// The header X-Requested-With allows server side frameworks, such as Django or RoR, to identify Ajax requests. It's optional, but can be useful.

// If the server returns a JSON string, it needs to be parsed inside the callback function ($.getJSON in jQuery):

getAjax('http://foo.bar/?p1=1&p2=Hello+World', function(data){
    var json = JSON.parse(data);
    console.log(json); 
});
// In case the returned JSON string might be invalid, wrap the parser into a try-catch statement.

// Sending POST requests is quite similar ($.post() in jQuery). However, there are lots of options available - more than can be covered in one post. Here's a useful helper function to get you started:

function postAjax(url, data, success) {
    var params = typeof data == 'string' ? data : Object.keys(data).map(
            function(k){ return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) }
        ).join('&');

    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    xhr.open('POST', url);
    xhr.onreadystatechange = function() {
        if (xhr.readyState>3 && xhr.status==200) { success(xhr.responseText); }
    };
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(params);
    return xhr;
}

// example request
postAjax('http://foo.bar/', 'p1=1&p2=Hello+World', function(data){ console.log(data); });

// example request with data object
postAjax('http://foo.bar/', { p1: 1, p2: 'Hello World' }, function(data){ console.log(data); });
// The Mozilla Developer Network provides a bunch of interesting Ajax examples and solutions. It's possible to send data in various formats, such as xml, json, script, text, and html. Modern browsers allow sending files and provide form serialization tools.