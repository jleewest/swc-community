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

    //group association:
    //group_id: {
    //  type: DataTypes.INTEGER,
    //  allowNull: false,
    //},
  });
  TopicSchema.associate = function (db) {
    TopicSchema.belongsTo(db.Users);
    TopicSchema.hasMany(db.Messages);
  };
  return TopicSchema;
};
