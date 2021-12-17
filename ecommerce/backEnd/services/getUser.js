const { users } = require('../sequelize/models');

const getUser = async (userEmail) => {
  const result = await users.findOne({ where: { email: userEmail } });
  console.log(result);

  return result;
};

module.exports = getUser;
