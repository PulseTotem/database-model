var connection = require('./../connection.js');

exports.schema = connection.sequelize.define('InfoType', {
	name: connection.Sequelize.STRING
});