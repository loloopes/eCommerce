const jwt = require('jsonwebtoken');

const secret = 'mysecret';

const genToken = (payload) => {
  const token = jwt.sign({ payload }, secret);
  return token;
};

module.exports = genToken;
