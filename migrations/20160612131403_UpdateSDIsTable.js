module.exports = {
  up: function(migration, DataTypes, done) {
    migration.addColumn(
      'SDIs',
      'TeamId',
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
      'SDIs',
      'TeamId'
    );
  }
}