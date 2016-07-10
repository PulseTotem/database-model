module.exports = {
  up: function(migration, DataTypes, done) {
    migration.removeColumn(
        'Users',
        'token'
    ).then(function(results) {
        migration.addColumn(
        'Users',
        'lastConnection',
        {
            type: DataTypes.DATE,
            allowNull: true
        }).then(function (results) {
            done();
        });
    });
  },

  down: function(migration, DataTypes) {
    migration.addColumn(
        'Users',
        'token',
        {
          type: DataTypes.STRING,
          allowNull: true
        });
  }
}