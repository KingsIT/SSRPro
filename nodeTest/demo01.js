var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {'contentType': 'text/html'})
    res.write("<head><meta charset='utf-8' /></head>");
    res.end('你好\n');
}).listen(1337, '127.0.0.1')
console.log('server running');