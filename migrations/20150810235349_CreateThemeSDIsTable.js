module.exports = {
  up: function(migration, DataTypes) {
    migration.createTable('ThemeSDIs', {
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
      defaultTheme: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },
      backgroundImageURL: {
        type: DataTypes.STRING,
        allowNull: true
      },
      backgroundVideoURL: {
        type: DataTypes.STRING,
        allowNull: true
      },
      backgroundColor: {
        type: DataTypes.STRING,
        allowNull: true
      },
      font: {
        type: DataTypes.STRING,
        allowNull: true
      },
      opacity: {
        type: DataTypes.STRING,
        allowNull: true
      },
      color: {
        type: DataTypes.STRING,
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
      ThemeZoneId: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    });
  },

  down: function(migration, DataTypes) {
    migration.dropTable('ThemeSDIs');
  }
}