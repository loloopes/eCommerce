const user = require('../../services/user');

// eslint-disable-next-line consistent-return
module.exports = async (req, res, next) => {
  try {
    const { email } = req.body;

    const loginUser = await user.getUser(email);

    return res.status(200).json(loginUser);
  } catch (err) {
    next(err);
  }
};
