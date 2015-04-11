var connection = require('./../database/connection.js');

exports.schema = connection.sequelize.define('ReceivePolicy', {
	name: {type: connection.Sequelize.STRING, unique: true},
	complete: connection.Sequelize.BOOLEAN
});