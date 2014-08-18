var connection = require('./../connection.js');

exports.schema = connection.sequelize.define('ReceivePolicy', {
	name: connection.Sequelize.STRING
});