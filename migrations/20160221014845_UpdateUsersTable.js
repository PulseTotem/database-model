module.exports = {
  up: function(migration, DataTypes, done) {
    migration.addColumn(
      'Users',
      'cmsId',
      {
        type: DataTypes.STRING,
        allowNull: true
      }
    ).then(function() {
      migration.addColumn(
        'Users',
        'cmsAuthkey',
        {
          type: DataTypes.STRING,
          allowNull: true
        }
      ).then(function() {
          done();
      });
    });
  },

  down: function(migration, DataTypes) {
    migration.removeColumn(
      'Users',
      'cmsId'
    );
    migration.removeColumn(
      'Users',
      'cmsAuthkey'
    );
  }
}