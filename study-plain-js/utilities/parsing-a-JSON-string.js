// Parsing a JSON string

// Takes a well-formed JSON string and returns the resulting JavaScript value.

// Use this fast and reliable method that is available in all modern browsers, including IE 8 to replace jQuery's $.parseJSON:

var json = '{ "foo": true, "bar": 1 }',
    obj = JSON.parse(json);

console.log(obj);