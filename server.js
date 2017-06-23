var static = require('node-static');
 
var port = 8000;

var file = new static.Server('./');
 
require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        
        file.serve(request, response);
    }).resume();
}).listen(port, function(){
	console.log('Server is running on port '+ port);
});