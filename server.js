// serve a static file (the index.html will not change as a result of interacting with the page)

var express = require('express');  // when importing a library, use lowercase
var app = new express();

app.use(express.static('.'));  // '.' means current directory

app.listen(3000, function(){
	console.log("App started at 3000...");
});
