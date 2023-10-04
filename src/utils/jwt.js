// src/utils/jwt.js
const jwt = require('jsonwebtoken');
const config = require('../config/config');

function generateToken(user) {
  const payload = {
    sub: user._id,
    // Add other user data to the payload as needed
  };

  return jwt.sign(payload, config.secret, { expiresIn: config.expiresIn });
}

module.exports = {
  generateToken,
};
