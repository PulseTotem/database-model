/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Sources', { 
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
    method: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    refreshTime: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    isStatic: {
      type: DataTypes.BOOLEAN,
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
    InfoTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    ServiceId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  });
};
