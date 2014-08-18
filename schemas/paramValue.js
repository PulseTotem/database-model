var connection = require('./../connection.js');

exports.schema = connection.sequelize.define('ParamValue', {
	value: connection.Sequelize.STRING
});