var connection = require('./../database/connection.js');

exports.schema = connection.sequelize.define('Source', {
	name: {type: connection.Sequelize.STRING, unique: 'sourceServiceName'},
	description: connection.Sequelize.STRING,
	method: connection.Sequelize.STRING,
	complete: connection.Sequelize.BOOLEAN
});