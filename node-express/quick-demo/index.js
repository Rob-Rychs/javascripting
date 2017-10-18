import express from 'express';
import quotes from './quotes.js';
const app = express();
const port = 3300;

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