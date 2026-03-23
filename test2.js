const http = require('http');
const options = {hostname:'localhost',port:3000,path:'/api/articles',method:'GET'};
const req = http.request(options,function(res){let body='';res.on('data',function(c){body+=c;});res.on('end',function(){console.log('Reponse:',body);});});
req.end();
