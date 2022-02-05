const express = require('express');
const app = express();
const http = require('http').createServer(app);

const PORT = 3001;

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  }
});

io.on('connection', (socket) => {
  socket.on('ping', (_message) => {
    console.log(socket.id)
  })
});


app.get('/', (_req, res) => {
  res.status(200).send('deu tudo certo');
});



http.listen(PORT, () => console.log(`Online na porta ${PORT}`));