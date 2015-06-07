var connection = require('./../database/connection.js');

exports.schema = connection.sequelize.define('SDIStatus', {
	ip: connection.Sequelize.STRING,
	complete: connection.Sequelize.BOOLEAN
});