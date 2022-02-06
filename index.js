const express = require('express');
const cors = require('cors');

const app = express();
const http = require('http').createServer(app);

const io = require('socket.io')(http, {
  cors: {
    origins: ['http://localhost:3000', 'https://lucasquearis-voll-solutions-case.netlify.app/'],
    methods: ['GET', 'POST'],
  },
});
const { ErrorController } = require('./src/controllers/Error');

const { messages } = require('./src/controllers/messages');

require('./src/sockets')(io);

app.use(cors());

const PORT = process.env.PORT || 3001;

app.get('/messages', messages);

app.use(ErrorController);

http.listen(PORT, () => global.console.log(`Online na porta ${PORT}`));
