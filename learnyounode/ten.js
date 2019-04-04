var net=require('net');
var server=net.createServer(function(socket){
    var data='';
    var date=new Date();
   data+=date.getFullYear();
   data+='-';
   data=data+(date.getMonth()+1<10?"0"+(date.getMonth()+1):date.getMonth()+1);
   data+='-';
   data=data+(date.getDate()<10?"0"+date.getDate():date.getDate());
   data+=' ';
   data+=(date.getHours()<10?"0"+date.getHours():date.getHours());
   data+=':';
   data+=(date.getMinutes()<10?"0"+date.getMinutes():date.getMinutes());
 socket.write(data+'\n');
 socket.end();
}

)

server.listen(process.argv[2]);