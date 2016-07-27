module.exports = {
  up: function(migration, DataTypes, done) {
    migration.sequelize.query('ALTER TABLE public."Sources" ADD CONSTRAINT "Sources_name_ServiceId_Unique" UNIQUE("name", "ServiceId")')
        .then(function (updateSourceResults) {
          done();
        })
  },

  down: function(migration, DataTypes, done) {
    migration.sequelize.query('ALTER TABLE "Sources" DROP CONSTRAINT "Sources_name_ServiceId_Unique"')
        .then(function (updateSourceResults) {
          done();
        })
  }
}