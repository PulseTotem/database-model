module.exports = {
  up: function(migration, DataTypes) {
    migration.createTable('SDIsUsers', {
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
        allowNull: false
      },
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
  },

  down: function(migration, DataTypes) {
    migration.dropTable('SDIsUsers');
  }
}