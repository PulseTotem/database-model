module.exports = {
  up: function(migration, DataTypes) {
    migration.addColumn(
      'SDIs',
      'TeamId',
      {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    );
  },

  down: function(migration, DataTypes) {
    migration.removeColumn(
      'SDIs',
      'TeamId'
    );
  }
}