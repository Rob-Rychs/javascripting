var http = require('http');
var data = require('./data/inventory');


//
//  Best practices to create an api with multiple routes
//  providing data to clients.


http.createServer(function(req, res){
    
    if(req.url === "/"){
       res.writeHead(200, {"Content-Type": "text/json"});
       res.end(JSON.stringify(data)); 
    }else if(req.url === "/instock"){
        listInStock(res);   
    }else if (req.url === "/onorder"){
        listOnBackOrder(res);
    }else{
       res.writeHead(404, {"Content-Type": "text/plain"});
       res.end("File not Found"); 
    }
    

}).listen(3000);



console.log("Server listening on port 3000");


function listInStock(res){
    var inStock = data.filter(function (item){
        return item.avail ==="In stock";
    });
    
    res.end(JSON.stringify(inStock));
}

function listOnBackOrder(res){
   var onOrder = data.filter(function (item){
        return item.avail ==="On back order";
    });  
    
    res.end(JSON.stringify(onOrder));
}