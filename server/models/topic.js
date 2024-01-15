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

    //user association:
    //created_by: {
    //  type: DataTypes.STRING,
    //  allowNull: false,
    //},

    GroupId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  TopicSchema.associate = function (db) {
    TopicSchema.belongsTo(
      db.Users
      //  , {
      //  foreignKey: 'created_by',
      //  targetKey: 'username',
      //  as: 'user',
      //  constraints: false,
      //}
    );
    TopicSchema.hasMany(db.Messages);
    TopicSchema.belongsTo(db.Groups);
  };
  return TopicSchema;
};
