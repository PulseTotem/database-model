/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RelativeTimelines', { 
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: {
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
    TimelineRunnerId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    UserTriggerId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    SystemTriggerId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  });
};
