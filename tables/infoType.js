var connection = require('./../database/connection.js');

exports.schema = connection.sequelize.define('InfoType', {
	name: {type: connection.Sequelize.STRING, unique: true},
	complete: connection.Sequelize.BOOLEAN
});