module.exports = {
  up: function(migration, DataTypes) {
    migration.createTable('RelativeEvents', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      position: {
        type: DataTypes.INTEGER,
        min: 0,
        allowNull: true
      },
      duration: {
        type: DataTypes.INTEGER,
        min: 0,
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
      RelativeTimelineId: {
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
    migration.dropTable('RelativeEvents');
  }
}