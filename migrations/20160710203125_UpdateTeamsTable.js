module.exports = {
  up: function(migration, DataTypes, done) {
    migration.addColumn(
      'Teams',
      'cmsId',
      {
        type: DataTypes.STRING,
        allowNull: true
      }
    ).then(function() {
        done();
      });
  },

  down: function(migration, DataTypes, done) {
    migration.removeColumn(
      'Teams',
      'cmsId'
    ).then(function() {
        done();
      });
  }
}