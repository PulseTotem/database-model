var connection = require('./../database/connection.js');

exports.schema = connection.sequelize.define('AbsoluteTimeline', {
	name: connection.Sequelize.STRING,
	begin: connection.Sequelize.DATE,
	duration: {
		type: connection.Sequelize.INTEGER,
		min: 0
	},
	complete: connection.Sequelize.BOOLEAN
});