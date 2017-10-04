var isMomHappy = true;

var willGetNewPhone = new Promise(function(resolve, reject){
  if(isMomHappy){
    var phone={brand: 'Samsung', color: 'Black'};
    resolve(isMomHappy);
  }else{
    var reason = new Error('mom is not happy');
    reject(reason);
  }
});

willGetNewPhone.then(function(fulfilled){
  console.log(fulfilled);
})
.catch(function(error){
  console.log(error.message);
});
