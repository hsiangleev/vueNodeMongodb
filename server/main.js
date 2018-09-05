
var express = require('express');
var app=express();
var http = require('http').Server(app);
// 自定义静态接口文件
var config = require("./config");
var interface = require("./interface/interface");
interface(app);

// json解析
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// vue-router history模式使用
var history = require('connect-history-api-fallback');
app.use(history());

app.use(express.static(config.file.staticFile));
app.get('/', function(req, res){
    res.sendFile(config.file.path);
});



http.listen(config.dev.port, function(){
	console.log(`listening on *:${config.dev.port}`);
});
