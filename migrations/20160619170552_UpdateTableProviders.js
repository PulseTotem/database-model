module.exports = {
  up: function(migration, DataTypes, done) {
    migration.addColumn(
        'Providers',
        'logo',
        {
          type: DataTypes.STRING(1024),
          allowNull: true
        }
    ).then(function(results) {
      done();
    });
  },

  down: function(migration, DataTypes) {
    migration.removeColumn(
        'Providers',
        'logo'
    );
  }
}