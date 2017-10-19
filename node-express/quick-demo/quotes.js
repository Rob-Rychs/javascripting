import express from 'express';
import bodyParser from 'body-parser';

const router = express.Router();

router.get('/', function(request, response) {
  response.send('Hello, world!');
}); 

router.get('/quotes', function(request, response) {
  response.send(quotes);
});

// remember to use %20 in url:author for spaces
router.get('/quotes/:name', function(request, response) {
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

router.post('/quotes', bodyParser.json(), (request, response) => {
  console.log(request.body);
  quotes.push(request.body);
  response.status(200).end();
})

router.delete('quotes/:name', (req, res) => {
  
  quotes = quotes.filter((quote) => {
    return quote.name !== req.params.name
  });
  res.status(200).end();
});

export default router;