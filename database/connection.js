var Sequelize = require('sequelize');

var fs = require('fs');
var file = __dirname + '/connection_infos.json';

if(process.env.HEROKU_POSTGRESQL_COBALT_URL) {
  exports.sequelize = new Sequelize(process.env.HEROKU_POSTGRESQL_COBALT_URL, {
    dialect:  'postgres',
    protocol: 'postgres',
    port:     match[4],
    host:     match[3],
    logging:  true //false
  });
} else {
  try {
    var connectionInfos = JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (e) {
    console.log("Connection configuration file can't be read.");
    return;
  }

  exports.sequelize = new Sequelize(connectionInfos.dbname, connectionInfos.user, connectionInfos.password, {
    dialect: "postgres", // or 'sqlite', 'postgres', 'mariadb'
    host: connectionInfos.host, // default : localhost
    port: connectionInfos.port // or 5432 (for postgres)
  });
}

exports.Sequelize = Sequelize;