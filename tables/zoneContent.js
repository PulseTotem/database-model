var connection = require('./../database/connection.js');

exports.schema = connection.sequelize.define('ZoneContent', {
	name: connection.Sequelize.STRING,
	description: connection.Sequelize.STRING,
	complete: connection.Sequelize.BOOLEAN
});