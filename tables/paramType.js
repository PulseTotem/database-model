var connection = require('./../database/connection.js');

exports.schema = connection.sequelize.define('ParamType', {
	name: connection.Sequelize.STRING,
	description: connection.Sequelize.STRING,
	tip: connection.Sequelize.STRING,
	type: connection.Sequelize.STRING,
	constraint: connection.Sequelize.STRING,
	defaultValue: connection.Sequelize.INTEGER
});