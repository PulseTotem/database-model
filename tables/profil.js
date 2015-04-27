var connection = require('./../database/connection.js');

exports.schema = connection.sequelize.define('Profil', {
	hash: {type: connection.Sequelize.STRING, unique: true},
	name: connection.Sequelize.STRING,
	description: connection.Sequelize.STRING,
	complete: connection.Sequelize.BOOLEAN
});