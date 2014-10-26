var connection = require('./../database/connection.js');

exports.schema = connection.sequelize.define('Behaviour', {
	name: {type: connection.Sequelize.STRING, unique: true},
	description: connection.Sequelize.STRING
});