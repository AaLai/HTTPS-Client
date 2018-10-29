var https = require('https');

module.exports = {
  "get" : getHTML,
  "print": printHTML
}


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
        callback(bufferedStream);
    });

  });

}

function printHTML (html) {
  console.log(html);
}