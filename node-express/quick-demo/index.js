import express from 'express';
import bodyParser from 'body-parser';
import quoteRoutes from './quotes';
import diyLogger from './lib/logger';
const app = express();
const port = 3300;

let quotes = [
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

app.use(diyLogger);

// some express middleware with app.use() means it will apply to every request
app.use((request, response, next) => {
  console.log('Middleware logger triggered...') // this will only show in terminal on web-server
  next(); // tells our middleware to proceed with next middleware/request handler
})

// express.static will serve a index.html file in the public directory
app.use(express.static('public')); // this will overide the app.get('/', ...) below, beware that the order of these base url '/' requests matters!!!

// ...now run `curl -i` again
app.listen(port, function() {
  console.log(`Server running @ localhost:${port}`);
});