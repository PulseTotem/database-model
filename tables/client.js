var connection = require('./../database/connection.js');

exports.schema = connection.sequelize.define('Client', {
	ip: connection.Sequelize.STRING,
	socketId: connection.Sequelize.STRING,
	complete: connection.Sequelize.BOOLEAN
});