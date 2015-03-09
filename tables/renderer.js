var connection = require('./../database/connection.js');

exports.schema = connection.sequelize.define('Renderer', {
	name: {type: connection.Sequelize.STRING, unique: true},
	description: connection.Sequelize.STRING,
	complete: connection.Sequelize.BOOLEAN
});