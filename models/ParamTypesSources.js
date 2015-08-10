/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ParamTypesSources', { 
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    ParamTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    SourceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });
};
