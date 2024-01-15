module.exports = function (sequelize, DataTypes) {
  const GroupSchema = sequelize.define('Groups', {
    img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  GroupSchema.associate = function (db) {
    GroupSchema.belongsToMany(db.Users, { through: db.User_Groups });
    //GroupSchema.hasMany(db.Topics);
  };
  return GroupSchema;
};
