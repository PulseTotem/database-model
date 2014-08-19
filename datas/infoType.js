var InfoTypes = require('../tables/infoType.js');

var datas = [
	{
		"name": "PictureAlbum"
	},
	{
		"name": "Calendar"
	}
];

exports.init = function() {
	for (var i = 0; i < datas.length; i++) {
		InfoTypes.schema.create(datas[i]);
	}
}
