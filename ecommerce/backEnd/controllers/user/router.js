const express = require('express');
const login = require('./login');

const router = express.Router({ mergeParams: true });

router.get('/', login);
router.get('/ping', (_req, res) => res.status(200).send('Pong!'));

module.exports = router;
