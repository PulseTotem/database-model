module.exports = {
  up: function(migration, DataTypes) {
    migration.createTable('ParamTypesSources', {
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        autoIncrement: true
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      ParamTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      SourceId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
  },

  down: function(migration, DataTypes) {
    migration.dropTable('ParamTypesSources');
  }
}