const express = require('express');
const cors = require('cors');

const app = express();
const http = require('http').createServer(app);

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

const { messages } = require('./src/controllers/messages');

require('./src/sockets')(io);

app.use(cors());

const PORT = 3001;

app.get('/messages', messages);

http.listen(PORT, () => global.console.log(`Online na porta ${PORT}`));
