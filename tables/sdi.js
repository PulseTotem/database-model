var connection = require('./../database/connection.js');

exports.schema = connection.sequelize.define('SDI', {
	name: connection.Sequelize.STRING,
	description: connection.Sequelize.STRING,
	allowedHost: connection.Sequelize.STRING,
	complete: connection.Sequelize.BOOLEAN
});