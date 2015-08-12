module.exports = {
  up: function(migration, DataTypes) {
    migration.createTable('ParamTypesSources', {
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.fn('NOW'),
        allowNull: false
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.fn('NOW'),
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