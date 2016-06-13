module.exports = {
  up: function(migration, DataTypes, done) {
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
    }).then(function(results) {
      done();
    });
  },

  down: function(migration, DataTypes) {
    migration.dropTable('ProfilsZoneContents');
  }
}