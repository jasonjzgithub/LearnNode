function doWork(text, data){
  console.log("text >>> " + text);
  console.log("data >>> " + data);
}

function doWorkfailed(text, data){
  console.log("text failed>>> " + text);
  console.log("data failed >>> " + data);
}

var p=new Promise(function(resolve, reject){
  var a =null;
  console.log("in p, a is assigned");
  //resolve("successful");
  reject(Error("failed"));
/*
  if(a){
    setTimeout(function(){
      resolve("successful");
    }, 3000);
  }else{
    reject(Error("failed"));
  }
  */
});

p.then(doWork,doWorkfailed);
//.catch(doWorkfailed) ;
