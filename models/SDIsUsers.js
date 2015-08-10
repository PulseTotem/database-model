/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SDIsUsers', { 
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    SDIId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });
};
