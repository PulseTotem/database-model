module.exports = {
  up: function(migration, DataTypes, done) {
    migration.addColumn(
        'Users',
        'isAdmin',
        {
          type: DataTypes.BOOLEAN,
          defaultValue: false
        }
    ).then(function(results) {
      done();
    });
  },

  down: function(migration, DataTypes) {
    migration.removeColumn(
        'Users',
        'isAdmin'
    );
  }
}