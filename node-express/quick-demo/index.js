import express from 'express';
const app = express();
const port = 3300;

const quotes = [
  { 
    name: 'Fred Brooks',
    text: 'Nine people can’t make a baby in a month.'
  },
  { 
    name: 'Paul Ford',
    text: 'A computer is a clock with benefits.'
  },
  { 
    name: 'Linus Torvalds',
    text: 'Talk is cheap. Show me the code.'
  }
];
app.get('/', function(request, response) {
  response.send('Hello, world!');
}); 

app.get('/quotes', function(request, response) {
  response.send(quotes);
});


// ...now run `curl -i` again
app.listen(port, function() {
  console.log(`Server running @ localhost:${port}`);
});