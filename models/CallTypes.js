/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CallTypes', { 
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
      defaultValue: 'now()'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: 'now()'
    },
    ZoneId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    SourceId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    RendererId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    PolicyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  });
};
