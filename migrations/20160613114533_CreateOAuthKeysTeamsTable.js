module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable('OAuthKeysTeams', {
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
      OAuthKeyId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      TeamId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
      }
    }).then(function(results) {
      done();
    });
  },

  down: function(migration, DataTypes) {
    migration.dropTable('OAuthKeysTeams');
  }
}