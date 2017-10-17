// using Async Await, taken from https://stackoverflow.com/questions/34436455/calling-multiple-http-requests-in-a-single-http-request-in-node-js
const async = require('async');
const request = require('request');

function httpGet(url, callback) {
  const options = {
    url :  url,
    json : true
  };
  request(options,
    function(err, res, body) {
      callback(err, body);
    }
  );
}

const urls= [
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albulms"
];

async.map(urls, httpGet, function (err, res){
  if (err) return console.log(err);
  console.log(res);
});