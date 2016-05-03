module.exports = {
  up: function(migration, DataTypes) {
    migration.addColumn(
        'ConstraintParamTypes',
        'values',
        {
          type: DataTypes.STRING,
          allowNull: true
        }
    );
  },

  down: function(migration, DataTypes) {
    migration.removeColumn(
        'ConstraintParamTypes',
        'values'
    );
  }
}