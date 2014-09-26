var Call = require('../tables/call.js'),
	CallType = require('../tables/callType.js'),
	InfoType = require('../tables/infoType.js'),
	ParamType = require('../tables/paramType.js'),
	ParamValue = require('../tables/paramValue.js'),
	Profil = require('../tables/profil.js'),
	ReceivePolicy = require('../tables/receivePolicy.js'),
	Renderer = require('../tables/renderer.js'),
	RenderPolicy = require('../tables/renderPolicy.js'),
	Role = require('../tables/role.js'),
	SDI = require('../tables/sdi.js'),
	Source = require('../tables/source.js'),
	Timeline = require('../tables/timeline.js'),
	User = require('../tables/user.js'),
	Zone = require('../tables/zone.js');

exports.init = function() {
	User.schema.hasMany(Role.schema);
	User.schema.hasMany(SDI.schema);

	SDI.schema.hasMany(User.schema);
	SDI.schema.hasMany(Zone.schema);
	SDI.schema.hasMany(Profil.schema);
	SDI.schema.hasMany(Timeline.schema);

	Zone.schema.belongsTo(SDI.schema);
	Zone.schema.hasMany(CallType.schema);
	Zone.schema.hasMany(Call.schema);

	CallType.schema.belongsTo(Zone.schema);
	CallType.schema.hasOne(Source.schema);
	CallType.schema.hasOne(Renderer.schema);
	CallType.schema.hasOne(ReceivePolicy.schema);
	CallType.schema.hasOne(RenderPolicy.schema);
	CallType.schema.hasMany(Call.schema);

	Source.schema.belongsTo(InfoType.schema);
	Source.schema.hasMany(ParamType.schema);
	Source.schema.hasMany(ParamValue.schema);

	//Renderer.schema.hasOne(InfoType.schema);

	InfoType.schema.hasMany(Source.schema);
	InfoType.schema.hasMany(Renderer.schema);

	ParamValue.schema.belongsTo(ParamType.schema);

	Call.schema.belongsTo(Zone.schema);
	Call.schema.belongsTo(CallType.schema);
	Call.schema.belongsTo(Profil.schema);
	Call.schema.hasMany(ParamValue.schema);
// necessaire ?
	Call.schema.hasOne(Source.schema);

	Profil.schema.hasMany(Call.schema);
	Profil.schema.hasMany(Timeline.schema);

	Timeline.schema.hasMany(Profil.schema);
};