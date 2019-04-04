var http=require('http');
var sum1='',sum2='',sum3='';
http.get(process.argv[2],function(response){
  
    response.setEncoding('utf8');
    response.on('data',function(data){
        sum1 +=data;
    });
    response.on('end',function(){
        console.log(sum1);
    });
    http.get(process.argv[3],function(response){
      
        response.setEncoding('utf8');
        response.on('data',function(data){
            sum2 +=data;
        });
        response.on('end',function(){
            console.log(sum2);
        });
        http.get(process.argv[4],function(response){
      
            response.setEncoding('utf8');
            response.on('data',function(data){
                sum3 +=data;
            });
            response.on('end',function(){
                console.log(sum3);
            });
            
        })
        
    })
    
})