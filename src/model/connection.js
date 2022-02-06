const { MongoClient } = require('mongodb');

require('dotenv').config();

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const MONGO_DB_URL = `mongodb+srv://lucasquearis:${process.env.MONGO_PASSWORD}@my-personal-chat.l4idh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

let db = null;

const connection = () => (db
  ? Promise.resolve(db)
  : MongoClient.connect(MONGO_DB_URL, OPTIONS)
    .then((conn) => {
      db = conn.db('my_personal_chat');
      return db;
    }));

module.exports = connection;
