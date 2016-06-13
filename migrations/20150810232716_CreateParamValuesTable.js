module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable('ParamValues', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      value: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      complete: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },
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
      SourceId: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      ParamTypeId: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      CallId: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    }).then(function(results) {
      done();
    });
  },

  down: function(migration, DataTypes) {
    migration.dropTable('ParamValues');
  }
}