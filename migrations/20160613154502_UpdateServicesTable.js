module.exports = {
  up: function(migration, DataTypes, done) {
    migration.removeColumn(
      'Services',
      'oauth'
    ).then(function() {
        migration.removeColumn(
          'Services',
          'provider'
        ).then(function() {
            done();
        });
    });
  },

  down: function(migration, DataTypes, done) {
    migration.addColumn(
      'Services',
      'oauth',
      {
        type: DataTypes.BOOLEAN,
        allowNull: true
      }
    ).then(function() {
      migration.addColumn(
        'Services',
        'provider',
        {
          type: DataTypes.STRING,
          allowNull: true
        }
      ).then(function(results) {
          done();
      });
    });
  }
}