var InfoTypes = require('../tables/infoType.js');

var datas = [
	{
		"name": "PictureAlbum"
	},
	{
		"name": "Calendar"
	}
];

exports.init = function(chainer) {
	for (var i = 0; i < datas.length; i++) {
		chainer.add(InfoTypes.schema.create(datas[i]));
	}
}
