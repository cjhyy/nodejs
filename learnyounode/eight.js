var http=require('http');
http.get(process.argv[2],function(response){
    var sum='';
    response.setEncoding('utf8');
    response.on('data',function(data){
        sum +=data;
    });
    response.on('end',function(){
        console.log(sum.length);
        console.log(sum);
    });
})