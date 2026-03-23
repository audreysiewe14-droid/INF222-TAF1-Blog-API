const express = require('express');
const app = express();
const articlesRouter = require('./routes/articles');

app.use(express.json());

app.use('/api/articles', articlesRouter);

app.get('/', (req, res) => {
  res.json({ message: 'Youpi mon API Blog est operationnelle !' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur demarre sur http://localhost:${PORT}`);
});