module.exports = {
  up: function(migration, DataTypes) {
    migration.removeColumn(
      'RendererThemes',
      'name'
    );
    migration.addColumn(
      'RendererThemes',
      'name',
      {
        type: DataTypes.STRING,
        allowNull: true
      }
    );
  },

  down: function(migration, DataTypes) {
    migration.removeColumn(
      'RendererThemes',
      'name'
    );
    migration.addColumn(
      'RendererThemes',
      'name',
      {
        type: DataTypes.STRING,
        unique: true,
        allowNull: true
      }
    );
  }
}