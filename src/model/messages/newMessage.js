const connection = require('../connection');

const newMessage = (username, message) => connection()
  .then((db) => db.collection('messages').insertOne({ username, message }));

module.exports = { newMessage };
