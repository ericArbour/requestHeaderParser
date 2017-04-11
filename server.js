var express = require('express');
var app = express();

app.get('/', function(req, res) {
 var obj = {
  'ipaddress': req.connection.remoteAddress.substr(7),
  'language': req.headers["accept-language"].substr(0, 5),
  'software': req.headers["user-agent"].match(/\(([^)]+)\)/)[1]
 }
 res.send(obj);
});

app.listen(process.env.PORT || 8080, function() {
 console.log('Server listening on port 8080');
});
