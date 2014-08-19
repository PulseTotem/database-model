var Sources = require('../tables/source.js');
var InfoTypes = require('../tables/infoType.js');

var datas = {
	"PictureAlbum": [
		{
			"name": "flickr_search",
			"service": "flickr",
			"description": "Cette source vous permet de récupérer des photos à partir du service de recherche de FlickR.",
			"host": "localhost",
			"port": 8080
		},
		{
			"name": "flickr_album",
			"service": "flickr",
			"description": "Cette source vous permet de récupérer des photos à partir du service de récupération d'albums Photos FlickR.",
			"host": "localhost",
			"port": 8080
		},
		{
			"name": "picasa_album",
			"service": "flickr",
			"description": "Cette source vous permet de récupérer des photos à partir du service de récupération d'albums de Picasa",
			"host": "localhost",
			"port": 8080
		}
	],

	"Calendar": [
		{
			"name": "icalreader_oneday",
			"service": "icalreader",
			"description": "Cette source vous permet de récupérer tous les événements du calendrier sur une journée.",
			"host": "localhost",
			"port": 8080
		}
	]
};

exports.init = function() {
	for (var infoType in datas) {
		var tableau = datas[infoType];
		var findInfoType = InfoTypes.schema.find({where: {name: infoType}});
		findInfoType.success( function(type) {
			console.log("Find infotype : "+type);
			for (var i = 0; i < tableau.length; i++) {
				Sources.schema.create(tableau[i]).success(function (source) {
					source.setInfoType(type).success( function() {
						console.log("Association OK between "+source+" and "+type);
					});
				});
			}
		});

		findInfoType.failure( function (err) {
			console.log(err);
		});
	}
}