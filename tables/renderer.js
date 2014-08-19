var connection = require('./../database/connection.js');

exports.schema = connection.sequelize.define('Renderer', {
	name: connection.Sequelize.STRING,
	description: connection.Sequelize.STRING
});