module.exports = function (sequelize, DataTypes) {
  const UserSchema = sequelize.define('Users', {
    clerkId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  UserSchema.associate = function (db) {
    UserSchema.hasMany(db.Messages);
    UserSchema.hasMany(db.Topics);
  };

  return UserSchema;
};
