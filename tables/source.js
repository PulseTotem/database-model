var connection = require('./../database/connection.js');

exports.schema = connection.sequelize.define('Source', {
	name: {type: connection.Sequelize.STRING, unique: 'sourceServiceName'},
	description: connection.Sequelize.STRING,
	method: connection.Sequelize.STRING,
  refreshTime: {
    type: connection.Sequelize.INTEGER,
    min: 0
  },
	isStatic: connection.Sequelize.BOOLEAN,
	complete: connection.Sequelize.BOOLEAN
});