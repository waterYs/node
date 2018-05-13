const ws = require('nodejs-websocket');  
// 创建websocket服务器  
var server=ws.createServer(function(data){
	data.on('text',function(str){
		if(str=='websocket'){
			data.sendText('success');
		}
		data.sendText(str)
	})
	data.on('close',function(code,reason){
		console.log('关闭连接')
	})
	data.on('error',function(code,reason){
		console.log('异常关闭')
	})
}).listen(8888);