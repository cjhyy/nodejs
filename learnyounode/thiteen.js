
var http=require('http');
var url=require('url');

var time=new Date();
function parsetime (time) {
    return {
      hour: time.getHours(),
      minute: time.getMinutes(),
      second: time.getSeconds()
    }
  }
  function unixtime (time) {
    return { unixtime : time.getTime() }
  }
var server=http.createServer(function(req,res){
     res.writeHead(200,{'Content-Type':'application/json'})
     var urll=url.parse(req.url,true);
     

    } 
    
    
}

);

server.listen(Number(process.argv[2]));