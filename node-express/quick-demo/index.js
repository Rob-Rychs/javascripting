import express from 'express';
import quotes from './quotes.js';
const app = express();
const port = 3300;

// some express middleware with app.use() means it will apply to every request
app.use((request, response, next) => {
  console.log('Middleware triggered...') // this will only show in terminal on web-server

  next(); // tells our middleware to proceed with next middleware/request handler
})

// express.static will serve a index.html file in the public directory
app.use(express.static('public')); // this will overide the app.get('/', ...) below, beware that the order of these base url '/' requests matters!!!

app.get('/', function(request, response) {
  response.send('Hello, world!');
}); 

app.get('/quotes', function(request, response) {
  response.send(quotes);
});

// remember to use %20 in url:author for spaces
app.get('/quotes/:author', function(request, response) {
  const authorQuotes = quotes.filter((quote) => {
    return quote.name === request.params.author;
  })
  if (authorQuotes.length) {
    response.send(authorQuotes);
  } else {
    response.status(404).send([{ error: `Author ${request.params.author} not found...`}])
  }
});


// ...now run `curl -i` again
app.listen(port, function() {
  console.log(`Server running @ localhost:${port}`);
});