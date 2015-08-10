module.exports = {
  up: function(migration, DataTypes) {
    migration.createTable('AuthorizedClients', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      ip: {
        type: DataTypes.STRING,
        allowNull: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      online: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },
      lastOnline: {
        type: DataTypes.DATE,
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
      ProfilId: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    });
  },

  down: function(migration, DataTypes) {
    migration.dropTable('AuthorizedClients');
  }
}