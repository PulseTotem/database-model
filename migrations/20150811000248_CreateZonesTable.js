module.exports = {
  up: function(migration, DataTypes) {
    var percentType = {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
        max: 100
      },
      allowNull: true
    };

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
      width: percentType,
      height: percentType,
      positionFromTop: percentType,
      positionFromLeft: percentType,
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