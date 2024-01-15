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
  TopicSchema.associate = function (db) {
    TopicSchema.belongsToMany(db.Users, { through: User_Groups });
    TopicSchema.hasMany(db.Topics);
  };
  return GroupSchema;
};
