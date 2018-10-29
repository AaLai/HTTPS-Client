var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

getHTML.get(requestOptions, reverse);

function reverse (html) {
  console.log(html.split('').reverse().join(''));
}