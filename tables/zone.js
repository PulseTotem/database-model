var connection = require('./../database/connection.js');

var percentType = {
	type: connection.Sequelize.INTEGER,
	validate: {
		min: 0,
		max: 100
	}
};

exports.schema = connection.sequelize.define('Zone', {
	name: connection.Sequelize.STRING,
	description: connection.Sequelize.STRING,
	width: percentType,
	height: percentType,
	positionFromTop: percentType,
	positionFromLeft: percentType
});