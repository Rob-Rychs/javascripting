// Serialize form data into an array

// Encode a set of form elements as an array of names and values.

// The following helper function serializeArray() takes one argument, a form node, and returns the form data as an array of name/value pairs:

function serializeArray(form) {
    var field, l, s = [];
    if (typeof form == 'object' && form.nodeName == "FORM") {
        var len = form.elements.length;
        for (var i=0; i<len; i++) {
            field = form.elements[i];
            if (field.name && !field.disabled && field.type != 'file' && field.type != 'reset' && field.type != 'submit' && field.type != 'button') {
                if (field.type == 'select-multiple') {
                    l = form.elements[i].options.length; 
                    for (j=0; j<l; j++) {
                        if(field.options[j].selected)
                            s[s.length] = { name: field.name, value: field.options[j].value };
                    }
                } else if ((field.type != 'checkbox' && field.type != 'radio') || field.checked) {
                    s[s.length] = { name: field.name, value: field.value };
                }
            }
        }
    }
    return s;
}
// The result is identical to what jQuery's $.serializeArray() returns.