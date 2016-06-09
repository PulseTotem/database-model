/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProfilsZoneContents', { 
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
    ZoneContentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ProfilId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });
};
