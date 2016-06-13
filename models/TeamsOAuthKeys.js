/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TeamsOAuthKeys', { 
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
    TeamId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    OAuthKeyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });
};
