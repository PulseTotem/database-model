module.exports = {
  up: function(migration, DataTypes) {
    migration.addColumn(
      'Users',
      'cmsId',
      {
        type: DataTypes.STRING,
        allowNull: true
      }
    );
    migration.addColumn(
      'Users',
      'cmsAuthkey',
      {
        type: DataTypes.STRING,
        allowNull: true
      }
    );
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