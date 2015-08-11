module.exports = {
  up: function(migration, DataTypes) {
    migration.createTable('RelativeTimelines', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
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
      TimelineRunnerId: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      UserTriggerId: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      SystemTriggerId: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    });
  },

  down: function(migration, DataTypes) {
    migration.dropTable('RelativeTimelines');
  }
}