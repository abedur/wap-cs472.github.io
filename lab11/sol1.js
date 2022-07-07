const http = require('http');
const fs = require('fs');
const server = http.createServer();

server.on('request', (req, res)=> {
    res.writeHead(200, { 'Content-Type': 'image/jpeg' });
    let image = fs.readFileSync('./usa3.jpg');
    res.end(image, 'binary');
});
server.listen(8080);