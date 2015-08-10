var connection = require('./../database/connection.js');

exports.schema = connection.sequelize.define('AbsoluteEvent', {
	name: connection.Sequelize.STRING,
	begin: connection.Sequelize.DATE,
	duration: {
		type: connection.Sequelize.INTEGER,
		min: 0
	},
	complete: connection.Sequelize.BOOLEAN
});