const express = require('express')
const app = express()
const port = 3300;

app.get('/', function (req, res) {
  res.send('Hello World!')
}) // run `nc localhost 3300` in terminal to get response

app.listen(port, function () {
  console.log(`Server running @ localhost:${port}`)
})
// Almost-equivalent code with regular Node:
// response.write('Hello, world!');
// response.end();