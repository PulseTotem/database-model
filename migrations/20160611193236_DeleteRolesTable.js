module.exports = {
  up: function(migration, DataTypes, done) {
    migration.dropTable('Roles').then(function(results) {
      done();
    });
  },

  down: function(migration, DataTypes) {
    migration.createTable('Roles', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
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
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    });
  }
}