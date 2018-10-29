// Gotta add the https module
var https = require('https');

// Getting the host name and path of the resource... '/' is root path
function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

// response is a stream that represents the HTTP response
https.get(requestOptions, function (response) {


  response.setEncoding('utf8');

// callback used when a data 'chunk' is recieved
  response.on('data', function (data) {
    console.log('Chunk Recieved: ', data + (' \n'));
  });

//callback used when all data is recieved
  response.on('end', function () {
    console.log('Response stream complete.');
  });

});

}

getAndPrintHTMLChunks();