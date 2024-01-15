module.exports = function (sequelize, DataTypes) {
  const UserSchema = sequelize.define('Users', {
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
      allowNull: false,
    },

    //store as hash
    //password: {
    //  type: DataTypes.STRING,
    //  allowNull: false,
    //},
    //permissions
    //role: {
    //  type: DataTypes.STRING,
    //  allowNull: false,
    //},
  });
  UserSchema.associate = function (db) {
    UserSchema.hasMany(db.Messages);
    UserSchema.hasMany(db.Topics);
    UserSchema.belongsToMany(db.Groups, { through: db.User_Groups });
  };

  return UserSchema;
};
