var mathmode = require('mathmode');
var express = require('express');

var app = express();

app.get('*', function(req, res) {
  try {
    var eq = decodeURIComponent(req.originalUrl.substring(1));
    var math = mathmode(eq);
    res.type('png');
    math.pipe(res);
  } catch (e) {
    res.send('Error piping');
  }
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Listening on port ' + port);
});
