/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Clients', { 
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    ip: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    socketId: {
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
    ProfilId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  });
};
