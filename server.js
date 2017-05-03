var appDir = __dirname + '/app',
    filesDir = __dirname + '/files';

var fs = require('fs'),
    connect = require('connect'),
    indexFile = fs.readFileSync(appDir + '/index.html'),
    port = 8080;

connect()
    .use(function (req, res) {
        res.setHeader('Content-Type', 'text/html');
        res.end(indexFile);
    })
    .listen(port);

console.log('Listening on port ' + port);

