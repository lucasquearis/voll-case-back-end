const userList = [];
const newMessageService = require('../services/messages/newMessage');

const newUser = (socket, io) => {
  socket.on('newUser', (name) => {
    userList.push({ id: socket.id, name });
    io.emit('userList', userList);
  });
};

const disconnect = (socket, io) => {
  socket.on('disconnect', () => {
    const userIndex = userList.findIndex(({ id }) => id === socket.id);
    userList.splice(userIndex, 1);
    io.emit('userList', userList);
  });
};

const newMessage = (socket) => {
  socket.on('newMessage', async ({ userName, message }) => {
    await newMessageService.newMessage(userName, message);
  });
};

module.exports = (io) => {
  io.on('connection', async (socket) => {
    io.emit('userList', userList);
    newUser(socket, io);
    disconnect(socket, io);
    newMessage(socket);
  });
};
