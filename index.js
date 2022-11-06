var sqlite3 = require('sqlite3').verbose();
var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var helmet = require('helmet');

var app = express();
var server = http.createServer(app);
var db = new sqlite3.Database('search-engine.db');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname));
app.use(helmet());

//added to render html with answer!
app.set("view engine", "pug");
app.set("views", path.join(__dirname));

app.get('/', function(req,res) {
	res.sendFile(path.join(__dirname,'search-engine.html'));
});

app.get('/result', function(req,res) {
console.log(req.query.search)
sanitized_query = req.query.search.replace(/[^A-Za-z0-9]/g, '')
  db.all('SELECT url FROM results WHERE keyword IS ?', [sanitized_query], function(err,answer) {
	if (err) {res.send('Error');console.error(err.message);}

console.log(answer);
console.log(answer.length);
if(typeof answer == "undefined") {
    answer = "";
}


res.render("result", { message: answer });
});

});

server.listen(80,function(){ 
    console.log("Server listening on port: 80");
});
