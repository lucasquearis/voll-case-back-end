const { messages } = require('../services/messages');

const userList = [];

module.exports = (io) => {
  io.on('connection', async (socket) => {
    io.emit('userList', userList);
    io.emit('messages', await messages());

    socket.on('newUser', (name) => {
      userList.push({ id: socket.id, name });
      io.emit('userList', userList);
    });

    socket.on('disconnect', () => {
      const userIndex = userList.findIndex(({ id }) => id === socket.id);
      userList.splice(userIndex, 1);
      io.emit('userList', userList);
    });
  });
};
