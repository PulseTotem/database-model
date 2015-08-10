module.exports = {
  up: function(migration, DataTypes) {
    migration.createTable('ProfilsZoneContents', {
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      ZoneContentId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      ProfilId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
  },

  down: function(migration, DataTypes) {
    migration.dropTable('ProfilsZoneContents');
  }
}