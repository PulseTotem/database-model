module.exports = {
  up: function(migration, DataTypes) {

    migration.sequelize.query('SELECT * FROM public."Users"').then(function(usersResults) {
      var users = usersResults[0];

        migration.sequelize.query('SELECT * FROM public."SDIsUsers"').then(function(sdisUsersResults) {
          var sdisUsers = sdisUsersResults[0];

          users.forEach(function(user) {

            //Create a Team for User
            migration.sequelize.query('INSERT INTO public."Teams"("name", "complete", "OwnerId") VALUES (\'' + user.username + 'Team\', true, ' + user.id + ') RETURNING id').then(function(teamIdresult) {
              var teamId = teamIdresult[0].id;

              //Add User to Team
              migration.sequelize.query('INSERT INTO public."TeamsUsers"("TeamId", "UserId") VALUES (' + teamId + ', ' + user.id + ')').then(function(addUserToTeamResult) {
                //Nothing to do
              });

              //Set DefaultTeam for User
              migration.sequelize.query('UPDATE public."Users" SET "DefaultTeamId" = ' + teamId + ' WHERE "id" = ' + user.id).then(function(updateUserDefaultTeamResults) {
                //Nothing to do
              });

              //Move SDIs' ownership to User's DefaultTeam
              sdisUsers.forEach(function(sdiUser) {
                if(sdiUser.UserId == user.id) {

                  migration.sequelize.query('UPDATE public."SDIs" SET "TeamId" = ' + teamId + ' WHERE "id" = ' + sdiUser.SDIId).then(function(updateResults) {
                    //Nothing to do
                  });

                }
              });

            });


          });
        });

    });
  },

  down: function(migration, DataTypes) {
    //Unmove data ?
  }
}