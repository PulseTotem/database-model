var connection = require('./../database/connection.js');

exports.schema = connection.sequelize.define('SDI', {
	description: connection.Sequelize.STRING,
	allowedHost: connection.Sequelize.STRING
});