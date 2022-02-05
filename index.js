const express = require('express');

const app = express();
const http = require('http').createServer(app);

const PORT = 3001;

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

let userList = [];

io.on('connection', (socket) => {
  io.emit('userList', userList);

  socket.on('newUser', (name) => {
    userList.push({ id: socket.id, name });
    io.emit('userList', userList);
    socket.broadcast.emit('messageNewUser', (`${name} acabou de se conectar! :)`));
  });

  socket.on('disconnect', () => {
    const newList = userList.filter(({ id }) => id === socket.id);
    userList = newList;
    io.emit('userList', userList);
  });
});

app.get('/', (_req, res) => {
  res.status(200).send('deu tudo certo');
});

http.listen(PORT, () => global.console.log(`Online na porta ${PORT}`));
