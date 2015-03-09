/**
 * Created by urli on 09/03/2015.
 */
var connection = require('./../database/connection.js');

exports.schema = connection.sequelize.define('Service', {
	name: {type: connection.Sequelize.STRING, unique: true},
	description: connection.Sequelize.STRING,
	host: connection.Sequelize.STRING,
	complete: connection.Sequelize.BOOLEAN
});