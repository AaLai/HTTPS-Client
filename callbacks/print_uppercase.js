var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

getHTML.get(requestOptions, upperCase);


function upperCase (html) {
  console.log(html.toUpperCase());
}