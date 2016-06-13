module.exports = {
  up: function(migration, DataTypes, done) {
    migration.addColumn(
        'ConstraintParamTypes',
        'values',
        {
          type: DataTypes.STRING,
          allowNull: true
        }
    ).then(function(results) {
        done();
      });
  },

  down: function(migration, DataTypes) {
    migration.removeColumn(
        'ConstraintParamTypes',
        'values'
    );
  }
}