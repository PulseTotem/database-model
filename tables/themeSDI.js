var connection = require('./../database/connection.js');

exports.schema = connection.sequelize.define('ThemeSDI', {
	name: connection.Sequelize.STRING,
	description: connection.Sequelize.STRING,
	complete: connection.Sequelize.BOOLEAN,
	defaultTheme: connection.Sequelize.BOOLEAN,
	backgroundImageURL: connection.Sequelize.STRING(1024),
	backgroundColor: connection.Sequelize.STRING,
	font: connection.Sequelize.STRING,
	opacity: connection.Sequelize.STRING,
	color: connection.Sequelize.STRING
});