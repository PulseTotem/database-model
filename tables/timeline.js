var connection = require('./../database/connection.js');

exports.schema = connection.sequelize.define('Timeline', {
	name: connection.Sequelize.STRING,
	description: connection.Sequelize.STRING,
	beginDate: connection.Sequelize.DATE,
	endDate: connection.Sequelize.DATE
});