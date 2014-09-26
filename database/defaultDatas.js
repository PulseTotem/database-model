var connection = require("./connection.js"),
	InfoType = require("../datas/infoType.js"),
	Source = require("../datas/source.js");

exports.init = function() {
	var chainer = new connection.Sequelize.Utils.QueryChainer;
	var chainer2 = new connection.Sequelize.Utils.QueryChainer;
	InfoType.init(chainer);
	chainer.runSerially().success(function() {
		Source.init(chainer2);
	}).error(function() {
		console.log("Erreur lors de l'initialisation des types d'infos.");
	});

	chainer2.runSerially().success(function() {
		console.log("Initialisation des sources");
	}).error(function() {
		console.log("Erreur lors de l'init des sources");
	});
};
