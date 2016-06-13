module.exports = {
  up: function(migration, DataTypes, done) {
    migration.removeColumn(
      'RendererThemes',
      'name'
    ).then(function() {
      migration.addColumn(
        'RendererThemes',
        'name',
        {
          type: DataTypes.STRING,
          allowNull: true
        }
      ).then(function() {
          done();
      });
    });
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