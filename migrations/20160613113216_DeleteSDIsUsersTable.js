module.exports = {
  up: function(migration, DataTypes, done) {
    migration.dropTable("SDIsUsers").then(function(results) {
      done();
    });
  },

  down: function(migration, DataTypes, done) {
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
        primaryKey: true,
        allowNull: false
      },
      UserId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
      }
    }).then(function(results) {
      done();
    });
  }
}