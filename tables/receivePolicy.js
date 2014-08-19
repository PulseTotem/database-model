var connection = require('./../database/connection.js');

exports.schema = connection.sequelize.define('ReceivePolicy', {
	name: connection.Sequelize.STRING
});