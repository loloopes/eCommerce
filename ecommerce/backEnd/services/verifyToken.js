const jwt = require('jsonwebtoken');

const secret = 'mysecret';

const verifyToken = (token) => {
  const { payload } = jwt.verify(token, secret);
  return payload;
};

module.exports = verifyToken;
