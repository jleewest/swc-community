module.exports = function (sequelize, DataTypes) {
  const TopicSchema = sequelize.define('Topics', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    GroupId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    UserClerkId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  TopicSchema.associate = function (db) {
    TopicSchema.belongsTo(db.Users);
    TopicSchema.hasMany(db.Messages);
    TopicSchema.belongsTo(db.Groups);
  };
  return TopicSchema;
};
