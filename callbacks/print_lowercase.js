var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

getHTML.get(requestOptions, lowerCase);


function lowerCase (html) {
  console.log(html.toLowerCase());
}