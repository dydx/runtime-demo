'use strict';

const runtime = require('runtimejs');
const HttpResponse = require('eshttp').HttpResponse;
const HttpServer = require('eshttp').HttpServer;

const server = new HttpServer();
const response = new HttpResponse(200, {
	server: 'runtimeks'
},
'Hello World!');

server.onrequest = request => {
	request.respondWith(response);
	console.log('Got request!');
};

server.listen(9000);
console.log('listening to port 9000');
