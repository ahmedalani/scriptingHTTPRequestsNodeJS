
module.exports = function getHTML (options, callback) {


const https = require('https');

  // const options = {
  //   host: 'sytantris.github.io',
  //   path: '/http-examples/step1.html'
  // };

https.get(options, (response) => {

  response.setEncoding('utf8');

  let fullData = '';
  response.on('data', function getAndPrintHTMLChunks (dataComing) {
    fullData += dataComing;

  });

  response.on('end', () => {
    callback(fullData);
  });

});



  // function printHTML (html) {
      console.log('html');
  // }


  callback('my passed in data');

};
