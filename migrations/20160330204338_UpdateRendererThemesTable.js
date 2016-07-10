module.exports = {
  up: function(migration, DataTypes, done) {
    migration.addColumn(
      'RendererThemes',
      'RendererId',
      {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    ).then(function(results) {
        done();
      });
  },

  down: function(migration, DataTypes) {
    migration.removeColumn(
      'RendererThemes',
      'RendererId'
    );
  }
}