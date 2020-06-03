import express from 'express'

const app = express ();

app.get('/users', (req, res) => {
  console.log('Listagem de usuarios')
  res.json([
    'um',
    'dois'
  ])
});

app.listen(3000, () => console.log('rodando'));