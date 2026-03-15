// http 
const http = require("http");
const server =http.createServer(function(req, res) {
//    console.log(req.url);
    //   res.end("Hello, World!");

    if(req.url =='/') res.end("Home Page!");
    if(req.url =='/about') res.end("ABOUT Page!");
    if(req.url =='/profile') res.end("PROFILE Page!");
})

// Set the port
 server.listen(3000);  