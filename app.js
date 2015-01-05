var mathmode = require('mathmode');
var express = require('express');

var app = express();

app.get('*', function(req, res) {
  res.type('png');
  var eq = decodeURIComponent(req.originalUrl.substring(1));
  mathmode(eq).pipe(res);
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Listening on port ' + port);
});
