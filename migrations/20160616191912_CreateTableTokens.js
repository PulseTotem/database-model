module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable('Tokens', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      value: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
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
    }).then(function(results) {
      done();
    });
  },

  down: function(migration, DataTypes) {
    migration.dropTable('Tokens');
  }
}