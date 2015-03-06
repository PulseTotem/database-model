var connection = require('./../database/connection.js');

exports.schema = connection.sequelize.define('TypeParamType', {
	name: {type: connection.Sequelize.STRING, unique: true}
});
