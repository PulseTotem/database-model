module.exports = {
  up: function(migration, DataTypes) {
    migration.createTable('ZoneContents', {
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
        defaultValue: DataTypes.fn('NOW'),
        allowNull: false
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.fn('NOW'),
        allowNull: false
      },
      ZoneId: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      AbsoluteTimelineId: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      RelativeTimelineId: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    });
  },

  down: function(migration, DataTypes) {
    migration.dropTable('ZoneContents');
  }
}