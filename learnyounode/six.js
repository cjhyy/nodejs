var mymodule=require('./mymodule.js');
mymodule(process.argv[2],process.argv[3],function(err,list){
    if (err){

    } else {
        for( var i in list)
        console.log(list[i]);
    }
});