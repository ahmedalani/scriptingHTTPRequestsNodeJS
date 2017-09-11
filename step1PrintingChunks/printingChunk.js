const https = require('https');

// function getAndPrintHTMLChunks () {}
  const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };
// };

https.get(requestOptions, (response) => {

  response.setEncoding('utf8');

  let fullData = '';
  response.on('data', function getAndPrintHTMLChunks (dataComing) {
    fullData += dataComing;

  });


//   });

  // response.on('data', (data) => {
//     console.log('Chunk Received. Length:', data.length);
//   });

  response.on('end', () => {
    console.log(fullData);
  });

});