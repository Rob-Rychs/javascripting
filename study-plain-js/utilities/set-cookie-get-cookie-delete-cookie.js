// Set cookie, get cookie and delete cookie

// Size optimized functions for creating, reading and erasing cookies in JavaScript.

// Use the following three functions for working with cookies.

function getCookie(name) {
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
}
function setCookie(name, value, days) {
    var d = new Date;
    d.setTime(d.getTime() + 24*60*60*1000*days);
    document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
}
function deleteCookie(name) { setCookie(name, '', -1); }
// All three functions are optimized on size. You may squeeze out some more bytes by minification.

// Warning: According to HTTP Cookie specs, semi-colons, commas, equals signs, and white spaces are not allowed characters. If you do need to use them, you will need to write a custom encode and decode function. encodeURIComponent() and decodeURIComponent() may be useful here.