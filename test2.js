var http = require("http");

const server = http.createServer(function(req, res) {
    console.log("12345");
});

server.listen(3000);