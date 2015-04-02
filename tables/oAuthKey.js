var connection = require('./../database/connection.js');

exports.schema = connection.sequelize.define('OAuthKey', {
    name: connection.Sequelize.STRING,
    description: connection.Sequelize.STRING,
    value: connection.Sequelize.STRING
});