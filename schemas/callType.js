var connection = require('./../connection.js');

exports.schema = connection.sequelize.define('CallType', {
	name: connection.Sequelize.STRING,
	description: connection.Sequelize.STRING
});