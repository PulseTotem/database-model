module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable('Sources', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        unique: 'sourceServiceName',
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
        min: 0,
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
        defaultValue: DataTypes.fn('NOW'),
        allowNull: false
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.fn('NOW'),
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
    }).then(function(results) {
      done();
    });
  },

  down: function(migration, DataTypes) {
    migration.dropTable('Sources');
  }
}