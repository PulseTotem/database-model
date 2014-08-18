var connection = require('./../connection.js');

exports.schema = connection.sequelize.define('Source', {
	name: connection.Sequelize.STRING,
	description: connection.Sequelize.STRING,
	tip: connection.Sequelize.STRING,
	host: connection.Sequelize.STRING,
	port: connection.Sequelize.INTEGER
});