const express = require('express');
const app = express();
const articlesRouter = require('./routes/articles');

app.use(express.json());

app.use('/api/articles', articlesRouter);

app.get('/', (req, res) => {
res.json({ 
  message: 'Bienvenue sur mon API Blog — mon premier projet backend, construit avec curiosité et détermination.',
  auteure: 'SIEWE SANTHE AUDREY CAMILA',
  universite: 'Université de Yaoundé I',
  cours: 'INF222 EC1 — Développement Backend',
  github: 'https://github.com/audreysiewe14-droid/INF222-TAF1-Blog-API',
  documentation: '/api/articles'
});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur demarre sur http://localhost:${PORT}`);
});