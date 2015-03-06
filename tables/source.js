var connection = require('./../database/connection.js');

exports.schema = connection.sequelize.define('Source', {
	name: {type: connection.Sequelize.STRING, unique: 'sourceServiceName'},
	service: {type: connection.Sequelize.STRING, unique: 'sourceServiceName'},
	description: connection.Sequelize.STRING,
	host: connection.Sequelize.STRING,
	port: connection.Sequelize.INTEGER
});