/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ConstraintParamTypes', { 
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
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    TypeParamTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  });
};
