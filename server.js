var fs = require('fs');
var connect = require('connect');
var port = 8080;

connect()
    .use(function (req, res) {
        res.setHeader('Content-Type', 'text/html');
        res.end(fs.readFileSync(__dirname + '/app/index.html'));
    })
    .listen(port);

console.log('Listening on port ' + port);
