var fs=require('fs');
const path=require('path');
fs.readdir(process.argv[2],function(err,list){
    if (err){
      throw err;
    } else {
          for(var i in list){
              if(path.extname(list[i])==('.'+process.argv[3]))
              {
                  console.log(list[i]);
              }
          }
    }
});