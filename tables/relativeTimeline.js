var connection = require('./../database/connection.js');

exports.schema = connection.sequelize.define('RelativeTimeline', {
	name: connection.Sequelize.STRING,
	complete: connection.Sequelize.BOOLEAN
});