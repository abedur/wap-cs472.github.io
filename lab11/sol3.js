const http = require('http');
const fs = require('fs');
const server = http.createServer();

server.on('request', (req, res) => {
    fs.createReadStream("./usa3.jpg").pipe(res);
});
server.listen(9000);