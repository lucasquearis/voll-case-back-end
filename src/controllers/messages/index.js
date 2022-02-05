const messagesService = require('../../services/messages');

const messages = async (_req, res, next) => {
  try {
    const response = await messagesService.messages();
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = { messages };
