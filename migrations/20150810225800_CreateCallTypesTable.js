module.exports = {
  up: function(migration, DataTypes) {
    migration.createTable('CallTypes', {
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
      ZoneId: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      SourceId: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      RendererId: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      PolicyId: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    });
  },

  down: function(migration, DataTypes) {
    migration.dropTable('CallTypes');
  }
}