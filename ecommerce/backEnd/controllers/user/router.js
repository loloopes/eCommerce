const express = require('express');
const get = require('./get');

const router = express.Router({ mergeParams: true });

router.get('/', get);
router.get('/ping', (_req, res) => res.status(200).send('Pong!'));

module.exports = router;
