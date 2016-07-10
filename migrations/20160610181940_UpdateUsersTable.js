module.exports = {
  up: function(migration, DataTypes, done) {
    migration.addColumn(
      'Users',
      'DefaultTeamId',
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
      'Users',
      'DefaultTeamId'
    );
  }
}