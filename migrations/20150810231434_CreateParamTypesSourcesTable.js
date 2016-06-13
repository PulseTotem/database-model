module.exports = {
  up: function(migration, DataTypes, done) {
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
        primaryKey: true,
        allowNull: false
      },
      SourceId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
      }
    }).then(function(results) {
      done();
    });
  },

  down: function(migration, DataTypes) {
    migration.dropTable('ParamTypesSources');
  }
}