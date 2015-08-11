module.exports = {
  up: function(migration, DataTypes) {
    migration.createTable('OAuthKeys', {
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
      value: {
        type: DataTypes.STRING(1024),
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
      },
      ServiceId: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    });
  },

  down: function(migration, DataTypes) {
    migration.dropTable('OAuthKeys');
  }
}