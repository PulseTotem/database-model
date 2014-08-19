var connection = require('./../database/connection.js');

exports.schema = connection.sequelize.define('RenderPolicy', {
	name: connection.Sequelize.STRING,
	description: connection.Sequelize.STRING
});