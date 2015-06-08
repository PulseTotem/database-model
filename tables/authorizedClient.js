var connection = require('./../database/connection.js');

exports.schema = connection.sequelize.define('AuthorizedClient', {
	ip: connection.Sequelize.STRING,
	name: connection.Sequelize.STRING,
	online: connection.Sequelize.BOOLEAN,
	lastOnline: connection.Sequelize.DATE,
	complete: connection.Sequelize.BOOLEAN
});