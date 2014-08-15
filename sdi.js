var connection = require('./connection.js');

exports.SDI = connection.sequelize.define('SDI', {
	description: connection.Sequelize.STRING,
	allowedHost: connection.Sequelize.STRING
});