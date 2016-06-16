module.exports = {
  up: function(migration, DataTypes, done) {
    migration.addColumn(
      'OAuthKeys',
      'ProviderId',
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
      'OAuthKeys',
      'ProviderId'
    );
  }
}