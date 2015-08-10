/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RelativeEvents', { 
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    position: {
      type: DataTypes.INTEGER,
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
    RelativeTimelineId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    CallId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  });
};
