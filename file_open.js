var fs=require('fs');
var buf = new Buffer(10000);

fs.open('text.txt', 'r', (err, handle)=>{
  fs.read(handle, buf, 0, 10000, null, (err, length) =>{
    console.log(buf.toString('utf8', 0, length));
    fs.close(handle, ()=>{});
  });
});
