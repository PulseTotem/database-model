module.exports = {
  up: function(migration, DataTypes) {
    migration.addColumn(
      'CallTypes',
      'RendererThemeId',
      {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    );
  },

  down: function(migration, DataTypes) {
    migration.removeColumn(
      'CallTypes',
      'RendererThemeId'
    );
  }
}