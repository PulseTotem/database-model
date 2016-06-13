/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OAuthKeysTeams', { 
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    OAuthKeyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    TeamId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });
};
