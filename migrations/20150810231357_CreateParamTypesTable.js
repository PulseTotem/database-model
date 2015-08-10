module.exports = {
  up: function(migration, DataTypes) {
    migration.createTable('ParamTypes', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      description: {
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
      TypeParamTypeId: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      ConstraintParamTypeId: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      ParamValueId: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    });
  },

  down: function(migration, DataTypes) {
    migration.dropTable('ParamTypes');
  }
}