function saveFile() {
	$.ajax({ 
    url, 
    data, 
    method: 'POST',  
  });
}

const url = 'http://fileupload.com';
const data = { color: 'red' };

saveFile(url, data);

// Multiple Properties with Enhanced Notation

// Refactored to use enhanced literal notation :)
// When object key-value pairs are the same, you cna omitt writing the pairs and just use shorthand

const red = '#ff0000';
const blue = '#0000ff';

const COLORS = { red, blue };