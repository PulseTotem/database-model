module.exports = {
  up: function(migration, DataTypes) {
    migration.addColumn(
      'Calls',
      'RendererThemeId',
      {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    );
  },

  down: function(migration, DataTypes) {
    migration.removeColumn(
      'Calls',
      'RendererThemeId'
    );
  }
}