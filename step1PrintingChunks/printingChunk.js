const https = require('https');

  const options = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

https.get(options, (response) => {

  response.setEncoding('utf8');

  let fullData = '';
  response.on('data', function getAndPrintHTMLChunks (dataComing) {
    fullData += dataComing;

  });

  response.on('end', () => {
    console.log(fullData);
  });

});


  // response.on('data', (data) => {
//     console.log('Chunk Received. Length:', data.length);
//   });
