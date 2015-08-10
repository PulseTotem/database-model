module.exports = {
  up: function(migration, DataTypes) {
    migration.createTable('ParamValues', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      value: {
        type: DataTypes.STRING,
        allowNull: true
      },
      complete: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updatedAt: {
        type: DataTypes.DATE,
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
    });
  },

  down: function(migration, DataTypes) {
    migration.dropTable('ParamValues');
  }
}