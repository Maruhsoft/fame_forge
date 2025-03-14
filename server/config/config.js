const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    jwtSecret: process.env.JWT_SECRET,
    apiKey: process.env.API_KEY
};
