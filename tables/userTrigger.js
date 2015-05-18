var connection = require('./../database/connection.js');

exports.schema = connection.sequelize.define('UserTrigger', {
	name: {type: connection.Sequelize.STRING, unique: true},
	description: connection.Sequelize.STRING,
	complete: connection.Sequelize.BOOLEAN
});