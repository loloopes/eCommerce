const { getUser, genToken } = require('../../services');

// eslint-disable-next-line consistent-return
module.exports = async (req, res, next) => {
  try {
    const { email } = req.body;

    const loginUser = await getUser(email);

    return res.status(200).json(genToken(loginUser.name));
  } catch (err) {
    next(err);
  }
};
