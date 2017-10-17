var http = require("http");

var server = http.createServer(function(req, res) {
    
    res.writeHead(200, {"Content-Type": "text/html"});
    
    res.end(`
 
 <html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>HTML Response from Server</title>
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
       <h1>Serving HTML from Server</h1>
       <p>${req.url}</p>
       <p>${req.method}</p>
    </body>
</html>

`);
    
});

server.listen(3000);

console.log("Server listening port 3000");

