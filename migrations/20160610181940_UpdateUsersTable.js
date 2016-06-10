module.exports = {
  up: function(migration, DataTypes) {
    migration.addColumn(
      'Users',
      'DefaultTeamId',
      {
        type: DataTypes.INTEGER,
        allowNull: true,
      }
    );
  },

  down: function(migration, DataTypes) {
    migration.removeColumn(
      'Users',
      'DefaultTeamId'
    );
  }
}