const express = require('express');
const app = express();

app.listen(3000, () => console.log('Server running port 3000'));

app.get('/atendimentos', (req, res) => res.send('Atendimento'));