var result=0;
for (var i in process.argv)
if (i>1){
    result += Number(process.argv[i])
}
  

console.log(result)