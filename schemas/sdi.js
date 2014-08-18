var connection = require('./../connection.js');

exports.schema = connection.sequelize.define('SDI', {
	description: connection.Sequelize.STRING,
	allowedHost: connection.Sequelize.STRING
});