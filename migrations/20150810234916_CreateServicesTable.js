module.exports = {
  up: function(migration, DataTypes) {
    migration.createTable('Services', {
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
      host: {
        type: DataTypes.STRING,
        allowNull: true
      },
      oauth: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },
      provider: {
        type: DataTypes.STRING,
        allowNull: true
      },
      logo: {
        type: DataTypes.STRING,
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
      }
    });
  },

  down: function(migration, DataTypes) {
    migration.dropTable('Services');
  }
}