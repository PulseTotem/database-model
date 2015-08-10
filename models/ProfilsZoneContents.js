/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProfilsZoneContents', { 
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
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
