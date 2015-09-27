var http = require("http");
http.createServer(
	function(req, res) {
		res.end("Hello World 2");
	}).listen(8000);
