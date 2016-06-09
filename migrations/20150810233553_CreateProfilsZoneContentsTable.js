module.exports = {
  up: function(migration, DataTypes) {
    migration.createTable('ProfilsZoneContents', {
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.fn('NOW'),
        allowNull: false
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.fn('NOW'),
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