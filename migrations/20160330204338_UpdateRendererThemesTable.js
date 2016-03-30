module.exports = {
  up: function(migration, DataTypes) {
    migration.addColumn(
      'RendererThemes',
      'RendererId',
      {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    );
  },

  down: function(migration, DataTypes) {
    migration.removeColumn(
      'RendererThemes',
      'RendererId'
    );
  }
}