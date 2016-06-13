module.exports = {
  up: function(migration, DataTypes, done) {
    migration.addColumn(
        'Calls',
        'CloneOrigineId',
        DataTypes.INTEGER
    ).then(function() {
      migration.addColumn(
          'CallTypes',
          'CloneOrigineId',
          DataTypes.INTEGER
      ).then(function() {
        migration.addColumn(
            'ParamValues',
            'CloneOrigineId',
            DataTypes.INTEGER
        ).then(function() {
          migration.addColumn(
              'Profils',
              'CloneOrigineId',
              DataTypes.INTEGER
          ).then(function() {
            migration.addColumn(
                'RelativeEvents',
                'CloneOrigineId',
                DataTypes.INTEGER
            ).then(function() {
              migration.addColumn(
                  'RelativeTimelines',
                  'CloneOrigineId',
                  DataTypes.INTEGER
              ).then(function() {
                migration.addColumn(
                    'SDIs',
                    'CloneOrigineId',
                    DataTypes.INTEGER
                ).then(function() {
                  migration.addColumn(
                      'ZoneContents',
                      'CloneOrigineId',
                      DataTypes.INTEGER
                  ).then(function() {
                    migration.addColumn(
                        'Zones',
                        'CloneOrigineId',
                        DataTypes.INTEGER
                    ).then(function() {
                        done();
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  },

  down: function(migration, DataTypes) {
    migration.removeColumn(
        'Calls',
        'CloneOrigineId'
    );
    migration.removeColumn(
        'CallTypes',
        'CloneOrigineId'
    );
    migration.removeColumn(
        'ParamValues',
        'CloneOrigineId'
    );
    migration.removeColumn(
        'Profils',
        'CloneOrigineId'
    );
    migration.removeColumn(
        'RelativeEvents',
        'CloneOrigineId'
    );
    migration.removeColumn(
        'RelativeTimelines',
        'CloneOrigineId'
    );
    migration.removeColumn(
        'SDI',
        'CloneOrigineId'
    );
    migration.removeColumn(
        'ZoneContents',
        'CloneOrigineId'
    );
    migration.removeColumn(
        'Zones',
        'CloneOrigineId'
    );
  }
};