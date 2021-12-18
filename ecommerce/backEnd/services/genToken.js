const jwt = require('jsonwebtoken');

const secret = 'mysecret';

const genToken = (payload) => {
  const token = jwt.sign({ payload }, secret, { expiresIn: '1h' });
  return token;
};

module.exports = genToken;
