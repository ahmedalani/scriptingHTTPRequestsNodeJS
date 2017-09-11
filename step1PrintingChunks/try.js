const getHTML = require('./http-functions');

const Options = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

getHTML(Options, function(data){
  console.log('got data:', data)
});

