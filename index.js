const express = require('express');
const cors = require('cors');

const app = express();
const http = require('http').createServer(app);

app.use(cors());

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

require('./src/sockets')(io);

const { messages } = require('./src/controllers/messages');

const PORT = 3001;

app.get('/messages', messages);

http.listen(PORT, () => global.console.log(`Online na porta ${PORT}`));
