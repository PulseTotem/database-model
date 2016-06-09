/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Zones', { 
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
    width: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    positionFromTop: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    positionFromLeft: {
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
      defaultValue: 'now()'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: 'now()'
    },
    SDIId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    BehaviourId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    ThemeZoneId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    CloneOrigineId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  });
};
