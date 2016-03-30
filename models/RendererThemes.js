/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RendererThemes', { 
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
    RendererId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  });
};
