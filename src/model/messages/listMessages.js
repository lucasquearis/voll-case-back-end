const connection = require('../connection');

const listMessages = () => connection()
  .then((db) => db.collection('messages').find().toArray());

module.exports = { listMessages };
