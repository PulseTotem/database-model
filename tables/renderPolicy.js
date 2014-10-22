var connection = require('./../database/connection.js');

exports.schema = connection.sequelize.define('RenderPolicy', {
	name: {type: connection.Sequelize.STRING, unique: true},
	description: connection.Sequelize.STRING
});