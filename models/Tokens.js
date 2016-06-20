/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Tokens', { 
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: 'now()'
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
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  });
};
