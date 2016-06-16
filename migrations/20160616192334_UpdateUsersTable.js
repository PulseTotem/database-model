module.exports = {
  up: function(migration, DataTypes, done) {
    migration.removeColumn(
        'Users',
        'Token'
    ).then(function(results) {
      done();
    });
  },

  down: function(migration, DataTypes) {
    migration.addColumn(
        'Users',
        'Token',
        {
          type: DataTypes.STRING,
          allowNull: true
        });
  }
}