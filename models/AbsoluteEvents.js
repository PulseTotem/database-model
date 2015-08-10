/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AbsoluteEvents', { 
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    begin: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    complete: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    AbsoluteTimelineId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    RelativeTimelineId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  });
};
