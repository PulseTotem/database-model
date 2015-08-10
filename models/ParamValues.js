/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ParamValues', { 
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    value: {
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
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    SourceId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    ParamTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    CallId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  });
};
