var connection = require('./../connection.js');

exports.schema = connection.sequelize.define('Call', {
	name: connection.Sequelize.STRING
});