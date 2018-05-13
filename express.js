var express=require('express');
var app=express();

app.get('/',function(req,res){
	// res.send('Hello World');
	res.sendFile(__dirname+'/'+'websocket.html');
});
var server=app.listen(8081,function(){
	var host=server.address().address
	var port=server.address().port
	console.log('访问地址为http://%s:%s',host,port);
})