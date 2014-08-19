var Sequelize = require('sequelize');

exports.Sequelize = Sequelize;

exports.sequelize = new Sequelize('testseq', 'the6thscreen', 'yourcast', {
	dialect: "postgres", // or 'sqlite', 'postgres', 'mariadb'
	port: 5432 // or 5432 (for postgres)
});