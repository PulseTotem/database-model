/**
 * Created by urli on 15/08/2014.
 */

var connection = require('./connection.js');

exports.User = connection.sequelize.define('User', {
	username: connection.Sequelize.STRING,
	password: connection.Sequelize.STRING
});