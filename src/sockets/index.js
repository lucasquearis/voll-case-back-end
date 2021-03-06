const userList = [];
const userTypingUsers = [];
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

const newMessage = (socket, io) => {
  socket.on('newMessage', async ({ userName, message }) => {
    await newMessageService.newMessage(userName, message);
    io.emit('message', 'new Message!');
  });
};

const userTyping = (socket) => {
  socket.on('typing', ({ typing, userName }) => {
    if (typing) {
      if (userTypingUsers.some((user) => user.userName === userName)) {
        return socket.broadcast.emit('typingList', userTypingUsers);
      }
      userTypingUsers.push(userName);
      return socket.broadcast.emit('typingList', userTypingUsers);
    }
    const userIndex = userTypingUsers.findIndex((user) => user.userName === userName);
    userTypingUsers.splice(userIndex, 1);
    return socket.broadcast.emit('typingList', userTypingUsers);
  });
};

const endConnection = (socket, io) => {
  socket.on('endConnection', () => {
    socket.disconnect();
    io.emit('userList', userList);
  });
};

module.exports = (io) => {
  io.on('connection', async (socket) => {
    global.console.log(`USUÁRIO ENTROU: ${socket.id}`);
    io.emit('userList', userList);
    newUser(socket, io);
    endConnection(socket, io);
    disconnect(socket, io);
    newMessage(socket, io);
    userTyping(socket, io);
  });
};
