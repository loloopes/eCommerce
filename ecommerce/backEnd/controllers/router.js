const express = require('express');
const user = require('./user/router');

const root = express.Router();

root.use('/user/get', user);

module.exports = root;
