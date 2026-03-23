const http = require('http');
const data = JSON.stringify({titre:"Mon article",contenu:"La cuisine",auteur:"Audrey",date:"2026-03-22",categorie:"Cuisine",tags:"cuisine"});
const options = {hostname:'localhost',port:3000,path:'/api/articles',method:'POST',headers:{'Content-Type':'application/json','Content-Length':data.length}};
const req = http.request(options,function(res){let body='';res.on('data',function(c){body+=c;});res.on('end',function(){console.log('Reponse:',body);});});
req.write(data);
req.end();
