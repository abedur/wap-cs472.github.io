const http = require('http');
const fs = require('fs');
const server = http.createServer();

server.on('request', (request, response) => {
    fs.readFile('./usa3.jpg', (err, data) => {
        if (err) throw err;
        response.end(data);
    });
});
server.listen(8000);
