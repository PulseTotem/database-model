/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AuthorizedClients', { 
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    ip: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    online: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    lastOnline: {
      type: DataTypes.DATE,
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
    SDIId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    ProfilId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  });
};
