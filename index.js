const http = require('http');

const data = JSON.stringify({
  titre: "Mon premier article",
  contenu: "La cuisine, ma passion",
  auteur: "Audrey",
  date: "2026-03-22",
  categorie: "Cuisine",
  tags: "cuisine,tv"
});

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/api/articles',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = http.request(options, function(res) {
  let body = '';
  res.on('data', function(chunk) { body += chunk; });
  res.on('end', function() { console.log('Reponse:', body); });
});

req.write(data);
req.end();