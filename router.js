function route(handle, pathname, response) {
  console.log('About to route a request for ' + pathname);

  if (typeof handle[pathname] === 'function') {
  	handle[pathname](response);
  } else {
  	    response.writeHead(200, {'Content-Type': 'text/plain'});
	    response.write('No request handler found for ' + pathname);
	    response.end();	
  }
}

exports.route = route;