var express=require('express');
var app=express();

app.get('/',function(req,res){
	// navigator.geolocation.getCurrentPosition(function(position){
	// 		console.log('position:',position);
	// 	})
	// res.send('Hello World');
	// res.sendFile(__dirname+'/'+'websocket.html');
});
app.get('/user',function(req,res){
	// res.send('Hello World');
	res.sendFile(__dirname+'/'+'user.json');
});
app.get('/manifest',function(req,res){
	res.sendFile(__dirname+'/'+'manifest.manifest');
});
app.get('/manifest.html',function(req,res){
	res.sendFile(__dirname+'/'+'manifest.html');
});
app.get('/movie.mp4',function(req,res){
	res.sendFile(__dirname+'/'+'movie.mp4');
});
app.get('/audio.mp3',function(req,res){
	res.sendFile(__dirname+'/'+'audio.mp3');
});
app.get('/webworker.html',function(req,res){
	res.sendFile(__dirname+'/'+'webworker.html');
});
app.get('/worker.js',function(req,res){
	res.header('Access-Control-Allow-Origin','*');
	res.sendFile(__dirname+'/'+'worker.js');
});
app.get('/canvas.html',function(req,res){
	// res.header('Access-Control-Allow-Origin','*');
	res.sendFile(__dirname+'/'+'canvas.html');
});
app.get('/img.jpg',function(req,res){
	// res.header('Access-Control-Allow-Origin','*');
	res.sendFile(__dirname+'/'+'img.jpg');
});
var server=app.listen(8081,function(){
	var host=server.address().address
	var port=server.address().port
	console.log('访问地址为http://%s:%s',host,port);
})