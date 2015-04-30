var connection = require('./../database/connection.js');

exports.schema = connection.sequelize.define('RelativeEvent', {
	name: connection.Sequelize.STRING,
	position: {
		type: connection.Sequelize.INTEGER,
		min: 0
	},
	duration: {
		type: connection.Sequelize.INTEGER,
		min: 0
	},
	complete: connection.Sequelize.BOOLEAN
});