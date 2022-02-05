const newMessageModel = require('../../model/messages/newMessage');

const newMessage = async (username, message) => {
  const response = await newMessageModel.newMessage(username, message);
  return response;
};

module.exports = { newMessage };
