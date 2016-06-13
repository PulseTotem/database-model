module.exports = {
  up: function(migration, DataTypes, done) {
    migration.addColumn(
      'ThemeZones',
      'borderRadius',
      {
        type: DataTypes.STRING,
        allowNull: true
      }
    ).then(function(results) {
        done();
      });
  },

  down: function(migration, DataTypes) {
    migration.removeColumn(
      'ThemeZones',
      'borderRadius'
    );
  }
}