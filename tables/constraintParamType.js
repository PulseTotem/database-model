var connection = require('./../database/connection.js');

exports.schema = connection.sequelize.define('ConstraintParamType', {
	name: connection.Sequelize.STRING,
	description: connection.Sequelize.STRING
});