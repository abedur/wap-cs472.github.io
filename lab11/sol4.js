const http = require('http'); 
const fs = require('fs');

http.createServer((req, res) => {
    const img = fs.createReadStream('./usa3.jpg');
    img.pipe(res);
}).listen(9090, () => console.log("listening to 9090"));