var connection = require('./../database/connection.js');

exports.schema = connection.sequelize.define('User', {
	username: {type: connection.Sequelize.STRING, unique: true},
    email: {type: connection.Sequelize.STRING, unique: true},
	password: connection.Sequelize.STRING,
    token: connection.Sequelize.STRING,
    lastIp: connection.Sequelize.STRING
});