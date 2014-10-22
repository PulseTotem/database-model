var connection = require('./../database/connection.js');

exports.schema = connection.sequelize.define('Source', {
	name: {type: connection.Sequelize.STRING, unique: true},
	service: connection.Sequelize.STRING,
	description: connection.Sequelize.STRING,
	host: connection.Sequelize.STRING,
	port: connection.Sequelize.INTEGER
});