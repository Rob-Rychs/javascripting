// Test if a certain value exists in an array

// Search for a specified value within an array and return its index (or -1 if not found).

// A fast and simple helper function for testing if a certain value is contained in another array:

function inArray(needle, haystack) {
    var length = haystack.length;
    for(var i=0; i<length; i++) {
        if(haystack[i] == needle) return i;
    }
    return -1;
}
// If you don't need to support IE8, it's recommended to use the array method indexOf(). It return the index of a matching value, and "-1" if the looked up value does not exist in the array.

var a = [1, 2, 'abc', true];

console.log(a.indexOf('abc'));
// >> 2

console.log(a.indexOf('y'));
// >> -1