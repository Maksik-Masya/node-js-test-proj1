const http = require('http');
const url = require('url');


function start(route, handle) {
  function onRequest(request, response) {
    const pathname = url.parse(request.url).pathname;

    console.warn(`Request for ${pathname} received`);

    route(handle, pathname, response);
  }

  http.createServer(onRequest).listen(3000);

  console.warn('Server has started');
}


exports.start = start;
