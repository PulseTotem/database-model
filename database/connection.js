var Sequelize = require('sequelize');

var fs = require('fs');
var file = __dirname + '/connection_infos.json';

try {
    var connectionInfos = JSON.parse(fs.readFileSync(file, 'utf8'));
} catch (e) {
    console.log("Connection configuration file can't be read.");
    return;
}
exports.Sequelize = Sequelize;

exports.sequelize = new Sequelize(connectionInfos.dbname, connectionInfos.user, connectionInfos.password, {
	dialect: "postgres", // or 'sqlite', 'postgres', 'mariadb'
    host: connectionInfos.host, // default : localhost
	port: connectionInfos.port // or 5432 (for postgres)
});
