var connection = require('./../database/connection.js');

exports.schema = connection.sequelize.define('TypeParamType', {
	name: connection.sequelize.STRING
});
