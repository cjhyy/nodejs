var a=1,b=2,c=3;
( function f1(){
    var b=5,c=6;
    (function f2(){
       var b=8;
       console.log('a: '+a+', b: '+b+', c: '+c);
       (function f3(){
        var a=7,c=9;
        (function f4(){
            var a=1,c=8;
         })();
     })();
    })();
}

)();