module.exports = {
  up: function(migration, DataTypes) {
    migration.createTable('SDIsUsers', {
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