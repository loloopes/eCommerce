/* eslint-disable no-unused-vars */
module.exports = (err, _req, res, _next) => {
  console.log(err);
  res.status(500).end();
};
