var connection = require('./../connection.js');

exports.schema = connection.sequelize.define('Role', {
	name: connection.Sequelize.STRING
});