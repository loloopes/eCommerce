const express = require('express');
const cors = require('cors');
const root = require('../controllers/router');
const middleware = require('../middleware');

const app = express();

app.use(express.json());
app.use(cors());
app.use(root);
app.use(middleware.error);

app.listen(3001, () => {
  console.log('server running on 3001');
});
