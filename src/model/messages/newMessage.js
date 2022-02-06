const { format } = require('date-fns');
const connection = require('../connection');

const newMessage = (username, message) => connection()
  .then((db) => db.collection('messages').insertOne({ username, message, time: format(new Date(), "hh:mm aaaaa'm'") }));

module.exports = { newMessage };
