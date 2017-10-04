var http = require("http");
var fs = require('fs');

function load_album_list(callback){
  fs.readdir("albums", (error, files)=>{
    if(error){
      callback(error);
    }else{
      callback(null, files);
    }
  });
}

function handle_incoming_request(req, res){
  console.log("Incoming request: " + req.method + " "+req.url);

  load_album_list((error, albums)=>{
    if(error){
      res.writeHead(500, {"Content-Type" : "application/json"});
      res.end(JSON.stringify({code: "cant_load_albums", message:error.message}));
    }else{
      var output={error:null, data:{albums:albums}};
      res.writeHead(200, {"Content-Type": "application/json"});
      res.end(JSON.stringify(output));
    }

  });
}

var s = http.createServer(handle_incoming_request);
s.listen(8082)
