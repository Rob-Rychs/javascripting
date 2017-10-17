// let's take a look at the evolution of asynchronous code in Javascript
// read this blog post for a good primer https://blog.risingstack.com/asynchronous-javascript/

// 1. using callback hell
                          // request is a node module that takes a callback with (error, response, posts)
                          // if only have one cb remember to handle errors first

const request = require('request');

const root = 'https://jsonplaceholder.typicode.com';
request.get({ url: `${root}/posts`, json:true }, (error, response, posts) => {
if(!error) {
  console.log(posts.splice(0, 9));
  request.get({ url: `${root}/albulms`, json:true }, (error, response, albulms) => {
    if(!error) {
      console.log(albulms.splice(0, 19));
      console.log('Done!'); 
    } else {
      console.log(error);
    }
   });
  }
});


// 2. using Promises
                      // request-promises is a node-module that implements the request module using promises. Promises we call a function that returns a promise => .then chaining to handle response and we can .catch the error if there is one
const rp = require('request-promise');

var options = {
  uri: `${root}/posts`,
  json: true // Automatically parses the JSON string in the response
};
// this is where the promises start with rp
rp(options)
.then((posts) => {
  console.log(posts.splice(0, 10))
  return rp({
    uri: `${root}/albulms`,
    json: true // Automatically parses the JSON string in the response
  }) 
  .then((albulms) => {
    console.log(albulms.splice(0, 20));
  })
  .then(() => {
    console.log('Done!');
  })
  .catch(function (err) {
      // API call failed...
      console.log(err);
  });
})

// 3. Async Await
                  // with async we 'try', then 'catch' the error if there is one.... and we we can even specify code that must absolutely run with 'finally'
async function getData() {
  try {
  const posts = await rp({uri: `${root}/posts`, json: true });
  const albulms = await rp({uri: `${root}/albulms`, json: true });

  console.log(posts.splice(0, 10))
  console.log(albulms.splice(0, 20));
  console.log('Done!'); 
  } catch(e) {
  console.log(e);
  } finally {
    // no matter what happens run this
    console.log('Async Await FTW')
  }
}

getData();