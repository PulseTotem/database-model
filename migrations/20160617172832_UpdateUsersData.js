module.exports = {
  up: function(migration, DataTypes, done) {
    migration.sequelize.query('UPDATE public."Users" SET "isAdmin" = true WHERE "username" = \'simon\' OR "username" = \'christian\'')
        .then(function (updateSourceResults) {
          done();
        })
  },

  down: function(migration, DataTypes, done) {
    migration.sequelize.query('UPDATE public."Users" SET "isAdmin" = false WHERE "username" = \'simon\' OR "username" = \'christian\'')
        .then(function (updateSourceResults) {
          done();
        })
  }
}