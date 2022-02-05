const { listMessages } = require('../../model/messages/listMessages');

const messages = async () => {
  const messagesList = await listMessages();
  return messagesList;
};

module.exports = { messages };
