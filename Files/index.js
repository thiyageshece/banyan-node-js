var express = require('express');
var app = express()

app.set('port', (process.env.PORT || 3000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

.on('error', function (err) {
    if (err.code === 'EADDRINUSE') {
      console.log('Address in use, Please try some other port');
      }
  });