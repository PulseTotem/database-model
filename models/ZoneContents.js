/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZoneContents', { 
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    complete: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: 'now()'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: 'now()'
    },
    ZoneId: {
      type: DataTypes.INTEGER,
      allowNull: true,
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
