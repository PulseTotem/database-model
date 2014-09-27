var connection = require('./../database/connection.js');

exports.schema = connection.sequelize.define('ConstraintParamType', {
	name: connection.sequelize.STRING,
	name: connection.sequelize.STRING
});