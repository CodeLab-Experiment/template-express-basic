const mongoose = require('mongoose');
const db = require('../models');
const Role = db.role;

const initial = () => {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: 'user',
      }).save((err) => {
        if (err) {
          console.log('error', err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: 'moderator',
      }).save((err) => {
        if (err) {
          console.log('error', err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: 'admin',
      }).save((err) => {
        if (err) {
          console.log('error', err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
};

const connectDb = async (URL) => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  try {
    const connection = await mongoose.connect(URL, connectionParams);
    console.log('======================================');
    console.info(`Mongo DB is connected to: ${connection.connection.host}`);
    initial();
    console.log('======================================');
  } catch (err) {
    console.log('======================================');
    console.error(`An error ocurred\n\r\n\r${err}`);
    console.log('======================================');
  }
};

module.exports = connectDb;
