const { getUser } = require('../../services');

// eslint-disable-next-line consistent-return
module.exports = async (req, res, next) => {
  try {
    const { email } = req.body;

    const loginUser = await getUser(email);

    return res.status(200).json(loginUser);
  } catch (err) {
    next(err);
  }
};
