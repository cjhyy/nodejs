var fs=require('fs');
const path=require('path');
module.exports=function(ads,names,callback){
fs.readdir(ads,function(err,list){
    var ss=[],tot=0;
    if (err){
      return callback(err);
    } else {
          for(var i in list){
              if(path.extname(list[i])==('.'+names))
              {

                 ss[tot]=list[i];
                 tot++;
              }
          }
    }
    callback(null,ss);
})
}