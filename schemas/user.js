var connection = require('./../connection.js');

exports.schema = connection.sequelize.define('User', {
	username: connection.Sequelize.STRING,
	password: connection.Sequelize.STRING
});