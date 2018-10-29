var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

getHTML.get(requestOptions, );


function l337 (html) {
  console.log(html);
}