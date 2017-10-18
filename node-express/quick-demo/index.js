import express from 'express';
import bodyParser from 'body-parser';
import quotes from './quotes';
import diyLogger from './lib/logger';
const app = express();
const port = 3300;


app.use(diyLogger);

// some express middleware with app.use() means it will apply to every request
app.use((request, response, next) => {
  console.log('Middleware logger triggered...') // this will only show in terminal on web-server
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
app.get('/quotes/:name', function(request, response) {
  const { name } = request.params;
  const slug = name.replace('-', ' ');

  const quotesList = quotes.filter((quote) => {
    return quote.name.toLowerCase() === slug.toLowerCase();
  });

  if (quotesList.length) {
    response.send(quotesList);
  } else {
    response.status(404).send([{ error: `Author ${slug} not found...`}])
  }
});

app.post('/quotes', bodyParser.json(), (request, response) => {
  console.log(request.body);
  quotes.push(request.body);
  res.status(200).end();
})


// ...now run `curl -i` again
app.listen(port, function() {
  console.log(`Server running @ localhost:${port}`);
});