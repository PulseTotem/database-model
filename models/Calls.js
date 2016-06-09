/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Calls', { 
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: {
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
      defaultValue: 'now()'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: 'now()'
    },
    CallTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    OAuthKeyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    CloneOrigineId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    RendererThemeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  });
};
