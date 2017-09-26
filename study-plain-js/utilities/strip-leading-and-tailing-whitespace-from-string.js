// Strip leading and trailing white-space from string

// Remove white-space characters from the beginning and end of a string.

// Modern browsers have a String.trim() method included. Therefore, we only extend the prototype-object for IE 8, which has no native support for it:

// IE 8
if (!String.prototype.trim) {
    String.prototype.trim = function(){ return this.replace(/^\s+|\s+$/g, ''); };
}

// example
var s = '  Hello World!  ';
s = s.trim();
console.log(s);
// "Hello World!"
// All browsers except IE 8 and below make use of the optimized internal stripping method, which is much faster. This is generally recommended when extending native objects.