module.exports = {
  up: function(migration, DataTypes, done) {
    migration.addColumn(
      'CallTypes',
      'RendererThemeId',
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
      'CallTypes',
      'RendererThemeId'
    );
  }
}