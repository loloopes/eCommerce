const { users } = require('../sequelize/models');

const getUser = async (userEmail) => {
  console.log(users);
  const result = await users.findOne({ where: { email: userEmail } });
  // const user = await User.findAll({});
  console.log(result);
  // return result;
};

module.exports = { getUser };
