var connection = require('./../database/connection.js');

exports.schema = connection.sequelize.define('ParamValue', {
	value: connection.Sequelize.STRING
});