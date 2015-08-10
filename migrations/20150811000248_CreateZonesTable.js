module.exports = {
  up: function(migration, DataTypes) {
    migration.createTable('Zones', {
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
      width: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      height: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      positionFromTop: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      positionFromLeft: {
        type: DataTypes.INTEGER,
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
      SDIId: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      BehaviourId: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      ThemeZoneId: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    });
  },

  down: function(migration, DataTypes) {
    migration.dropTable('Zones');
  }
}