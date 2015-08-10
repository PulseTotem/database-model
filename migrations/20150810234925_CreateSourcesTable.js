module.exports = {
  up: function(migration, DataTypes) {
    migration.createTable('Sources', {
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
      method: {
        type: DataTypes.STRING,
        allowNull: true
      },
      refreshTime: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      isStatic: {
        type: DataTypes.BOOLEAN,
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
      InfoTypeId: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      ServiceId: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    });
  },

  down: function(migration, DataTypes) {
    migration.dropTable('Sources');
  }
}