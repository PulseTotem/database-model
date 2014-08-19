var connection = require('./../database/connection.js');

exports.schema = connection.sequelize.define('Zone', {
	name: connection.Sequelize.STRING,
	description: connection.Sequelize.STRING,
	position: connection.Sequelize.STRING
});