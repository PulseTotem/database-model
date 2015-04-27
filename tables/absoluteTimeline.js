var connection = require('./../database/connection.js');

exports.schema = connection.sequelize.define('AbsoluteTimeline', {
	name: connection.Sequelize.STRING,
	complete: connection.Sequelize.BOOLEAN
});