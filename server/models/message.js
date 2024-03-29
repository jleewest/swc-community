module.exports = function (sequelize, DataTypes) {
  const MessageSchema = sequelize.define('Messages', {
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    TopicId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    UserClerkId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  MessageSchema.associate = function (db) {
    MessageSchema.belongsTo(db.Topics);
    MessageSchema.belongsTo(db.Users);
  };

  return MessageSchema;
};
