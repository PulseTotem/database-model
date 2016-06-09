module.exports = {
  up: function(migration, DataTypes) {
    migration.addColumn(
      'ThemeZones',
      'borderRadius',
      {
        type: DataTypes.STRING,
        allowNull: true
      }
    );
  },

  down: function(migration, DataTypes) {
    migration.removeColumn(
      'ThemeZones',
      'borderRadius'
    );
  }
}