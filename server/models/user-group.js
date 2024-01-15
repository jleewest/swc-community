module.exports = function (sequelize, DataTypes) {
  const UserGroupSchema = sequelize.define('User_Groups', {
    UserId: {
      type: DataTypes.INTEGER,
    },
    GroupId: {
      type: DataTypes.INTEGER,
    },
  });
  return UserGroupSchema;
};
