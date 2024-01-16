module.exports = function (sequelize, DataTypes) {
  const UserGroupSchema = sequelize.define('User_Groups', {
    ClerkId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    GroupId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return UserGroupSchema;
};
