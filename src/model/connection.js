const { MongoClient } = require('mongodb');

require('dotenv').config();

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
let db = null;

const connection = () => (db
  ? Promise.resolve(db)
  : MongoClient.connect(process.env.MONGO_DB_URI, OPTIONS)
    .then((conn) => {
      db = conn.db('my_personal_chat');
      return db;
    }));

module.exports = connection;
