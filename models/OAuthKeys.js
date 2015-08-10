/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OAuthKeys', { 
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
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    ServiceId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  });
};
