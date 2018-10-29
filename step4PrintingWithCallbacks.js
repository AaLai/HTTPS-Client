// Gotta add the https module
var https = require('https');

// Getting the host name and path of the resource... '/' is root path
function getHTML (options, callback) {





// response is a stream that represents the HTTP response
https.get(options, function (response) {
var bufferedStream;

  response.setEncoding('utf8');

// callback used when a data 'chunk' is recieved
  response.on('data', function (data) {
    bufferedStream += data;
  });

//callback used when all data is recieved
  response.on('end', function () {
    if (callback === printHTML) {
      callback(bufferedStream);
    }
  });

});

}

function printHTML (html) {
  console.log(html);
}


 var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
  }

var requestOptions1 = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  }


getHTML(requestOptions, printHTML);
