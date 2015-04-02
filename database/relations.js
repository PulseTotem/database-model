var Behaviour = require('../tables/behaviour.js'),
	Call = require('../tables/call.js'),
	CallType = require('../tables/callType.js'),
    ConstraintParamType = require('../tables/constraintParamType.js'),
    InfoType = require('../tables/infoType.js'),
    OAuthKey = require('../tables/oAuthKey.js'),
	ParamType = require('../tables/paramType.js'),
    ParamValue = require('../tables/paramValue.js'),
    Profil = require('../tables/profil.js'),
    ReceivePolicy = require('../tables/receivePolicy.js'),
    Renderer = require('../tables/renderer.js'),
    RenderPolicy = require('../tables/renderPolicy.js'),
    Role = require('../tables/role.js'),
    SDI = require('../tables/sdi.js'),
    Service = require('../tables/service.js'),
    Source = require('../tables/source.js'),
    Timeline = require('../tables/timeline.js'),
    TypeParamType = require('../tables/typeParamType.js'),
	User = require('../tables/user.js'),
	Zone = require('../tables/zone.js');

exports.init = function() {
	User.schema.hasMany(Role.schema); // a user has different roles
	User.schema.hasMany(SDI.schema);  // a user has access to different SDI's
    User.schema.hasMany(OAuthKey.schema);  // a user has access to different OAuthKeys

    OAuthKey.schema.belongsTo(Service.schema); // an OAuthKey belongs to one Service

	SDI.schema.hasMany(User.schema); // a SDI can be seen/administrated by different users
	SDI.schema.hasMany(Zone.schema); // a SDI contains many zone
	SDI.schema.hasMany(Profil.schema); // a SDI can have many profiles
	SDI.schema.hasMany(Timeline.schema); // a SDI can have many timelines

	Zone.schema.belongsTo(SDI.schema); // a Zone can only belong to one SDI
	Zone.schema.belongsTo(Behaviour.schema); // a Zone has one Behaviour
	Zone.schema.hasMany(CallType.schema); // a Zone has many CallTypes and must be able to reach them for Client
	//Zone.schema.hasMany(Call.schema); // a Zone has many Calls and must be able to reach them for Client

	CallType.schema.belongsTo(Zone.schema); // a CallType has one Zone
	CallType.schema.belongsTo(Source.schema); // a CallType has one Source
	CallType.schema.belongsTo(Renderer.schema); // a CallType has one Renderer
	CallType.schema.belongsTo(ReceivePolicy.schema); // a CallType has one ReceivePolicy
	CallType.schema.belongsTo(RenderPolicy.schema); // a CallType has one RenderPolicy
	//CallType.schema.hasMany(Call.schema); // TODO: And a CallType can have many Calls, but do we need to be able to reach them ??

	Source.schema.belongsTo(InfoType.schema); // a Source has one InfoType
	Source.schema.hasMany(ParamType.schema);  // TODO: a Source can have many ParamType but do we need to be able to reach them ??
	Source.schema.hasMany(ParamValue.schema, {as: 'defaultParam'});
	Source.schema.belongsTo(Service.schema);

	Service.schema.hasMany(Source.schema);

	Renderer.schema.belongsTo(InfoType.schema); // A Renderer has one InfoType

	//InfoType.schema.hasMany(Source.schema);  // An InfoType has many Sources : TODO : do we need that information?
	//InfoType.schema.hasMany(Renderer.schema); // an InfoType has many Renderers : TODO : do we need the information?

	ConstraintParamType.schema.belongsTo(TypeParamType.schema); // A constraint applies only on a specific TypeParamType

	ParamType.schema.belongsTo(TypeParamType.schema, {as: 'type'}); // A paramType has a TypeParamType
	ParamType.schema.belongsTo(ConstraintParamType.schema, {as: 'constraint'});  // A paramType can have a constraint
	ParamType.schema.belongsTo(ParamValue.schema, {as: 'defaultValue'}); // a ParamType can have a default value
    ParamType.schema.hasMany(Source.schema); // a ParamType is used by several Sources
	//ParamType.schema.hasMany(ParamValue.schema); // A paramType has many values TODO: do we need to be able to reach them?

	ParamValue.schema.belongsTo(ParamType.schema); // a ParamValue has one ParamType

	Call.schema.belongsTo(CallType.schema); // a Call has one specific CallType
	Call.schema.belongsTo(Profil.schema);  // a Call belongs to a Profil
	Call.schema.hasMany(ParamValue.schema); // a Call has many ParamValues

	Profil.schema.hasMany(Call.schema); // a Profil has many Calls

	Timeline.schema.hasMany(Profil.schema); // a timeline can have many profils
};