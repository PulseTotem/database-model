var connection = require('./../database/connection.js');

exports.schema = connection.sequelize.define('Call', {
	name: connection.Sequelize.STRING,
	complete: connection.Sequelize.BOOLEAN
});