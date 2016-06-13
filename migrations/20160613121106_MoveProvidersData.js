module.exports = {
  up: function(migration, DataTypes, done) {
    migration.sequelize.query('SELECT * FROM public."Services" WHERE "oauth" = true').then(function(servicesResults) {
      var services = servicesResults[0];

      var providers = [];

      if(services.length > 0) {

        var nbServiceDone = 0;


        var updateAllSources = function(service, providerId) {
          //Select all Sources linked to current Service
          migration.sequelize.query('SELECT * FROM public."Sources" WHERE "ServiceId" = ' + service.id).then(function(sourcesResults) {
            var sources = sourcesResults[0];

            if(sources.length > 0) {
              var nbSourceDone = 0;

              sources.forEach(function(source) {

                //Set Provider to current Source
                migration.sequelize.query('UPDATE public."Sources" SET "ProviderId" = ' + providerId + ' WHERE "id" = ' + source.id).then(function (updateSourceResults) {
                  nbSourceDone++;

                  if(nbSourceDone == sources.length) {
                    nbServiceDone++;

                    if(nbServiceDone == services.length) {
                      done();
                    }
                  }
                });

              });

            } else {
              nbServiceDone++;

              if(nbServiceDone == services.length) {
                done();
              }
            }
          });
        };

        var updateAllOAuthKeys = function(service, providerId) {
          //Select all OAuthkeys linked to current Service
          migration.sequelize.query('SELECT * FROM public."OAuthKeys" WHERE "ServiceId" = ' + service.id).then(function(oauthkeysResults) {
            var oauthkeys = oauthkeysResults[0];

            if(oauthkeys.length > 0) {
              var nbOAuthKeyDone = 0;

              oauthkeys.forEach(function(oauthkey) {

                //Set Provider to current OAuthKey
                migration.sequelize.query('UPDATE public."OAuthKeys" SET "ProviderId" = ' + providerId + ' WHERE "id" = ' + oauthkey.id).then(function (updateOAuthKeyResults) {
                  nbOAuthKeyDone++;

                  if(nbOAuthKeyDone == oauthkeys.length) {
                    updateAllSources(service, providerId);
                  }
                });

              });

            } else {
              updateAllSources(service, providerId);
            }
          });
        };

        services.forEach(function(service) {
          if(providers.indexOf(service.provider) == -1) {
            providers.push(service.provider);

            //Create a new Provider
            migration.sequelize.query('INSERT INTO public."Providers"("name", "description", "complete") VALUES (\'' + service.provider + '\', \'From Service : ' + service.name + '\', true) RETURNING id').then(function (providerIdresult) {
              var providerId = providerIdresult[0].id;

              updateAllOAuthKeys(service, providerId);

            });
          } else {
            //Retrieve created Provider
            migration.sequelize.query('SELECT * FROM public."Providers" WHERE "name" = \'' + service.provider + '\'').then(function(providersResults) {
              var providers = providersResults[0];

              if(providers.length == 1) {
                var providerId = providers[0].id;

                updateAllOAuthKeys(service, providerId);

              } else {
                // ERROR !!!!
              }
            });
          }
        });


      } else {
        done();
      }

    });
  },

  down: function(migration, DataTypes) {
    //Unmove data?
  }
}