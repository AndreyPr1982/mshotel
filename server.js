var appDir = __dirname + '/app',
    filesDir = __dirname + '/files';

var fs = require('fs'),
    url = require('url'),
    connect = require('connect'),
    contentDisposition = require('content-disposition'),
    serveStatic = require('serve-static'),
    indexFile = fs.readFileSync(appDir + '/index.html'),
    port = 80;

connect()
    .use(serveStatic(appDir))
    .use(serveFile)
    .use(function (req, res) {
        res.setHeader('Content-Type', 'text/html');
        res.end(indexFile);
    })
    .listen(port);

console.log('Listening on port ' + port + '...');

function serveFile(req, res, next) {
    var pathname = decodeURIComponent(url.parse(req.url).pathname),
        filePath = filesDir + pathname;

    fs.existsSync(filePath) || next();

    serveStatic(filesDir, {
        index: false,
        setHeaders: setHeaders
    })(req, res, next);
}

function setHeaders(res, path) {
    res.setHeader('Content-Disposition', contentDisposition(path));
}
