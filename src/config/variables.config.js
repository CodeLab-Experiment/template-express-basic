const dotenv = require('dotenv');
dotenv.config();

exports.PORT = process.env.PORT || `3031`;
exports.DATABASE_URL = process.env.DATABASE_URL;
exports.SECRET = process.env.SECRET;
