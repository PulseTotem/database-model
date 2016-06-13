module.exports = {
  up: function(migration, DataTypes, done) {
    migration.removeColumn(
      'OAuthKeys',
      'ServiceId'
    ).then(function() {
        done();
    });
  },

  down: function(migration, DataTypes, done) {
    migration.addColumn(
      'OAuthKeys',
      'ServiceId',
      {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    ).then(function() {
        done();
    });
  }
}