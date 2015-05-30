var AbsoluteEvent = require('../tables/absoluteEvent.js'),
	AbsoluteTimeline = require('../tables/absoluteTimeline.js'),
	Behaviour = require('../tables/behaviour.js'),
	Call = require('../tables/call.js'),
	CallType = require('../tables/callType.js'),
    ConstraintParamType = require('../tables/constraintParamType.js'),
    InfoType = require('../tables/infoType.js'),
    OAuthKey = require('../tables/oAuthKey.js'),
	ParamType = require('../tables/paramType.js'),
    ParamValue = require('../tables/paramValue.js'),
	Policy = require('../tables/policy.js'),
    Profil = require('../tables/profil.js'),
	RelativeEvent = require('../tables/relativeEvent.js'),
	RelativeTimeline = require('../tables/relativeTimeline.js'),
    Renderer = require('../tables/renderer.js'),
    Role = require('../tables/role.js'),
    SDI = require('../tables/sdi.js'),
    Service = require('../tables/service.js'),
    Source = require('../tables/source.js'),
	SystemTrigger = require('../tables/systemTrigger.js'),
	TimelineRunner = require('../tables/timelineRunner.js'),
	ThemeSDI = require('../tables/themeSDI.js'),
	ThemeZone = require('../tables/themeZone.js'),
    TypeParamType = require('../tables/typeParamType.js'),
	User = require('../tables/user.js'),
	UserTrigger = require('../tables/userTrigger.js'),
	Widget = require('../tables/widget.js'),
	Zone = require('../tables/zone.js'),
	ZoneContent = require('../tables/zoneContent.js');

exports.init = function() {
	User.schema.hasMany(Role.schema); // a user has different roles
	User.schema.hasMany(SDI.schema);  // a user has access to different SDI's
  User.schema.hasMany(OAuthKey.schema);  // a user has access to different OAuthKeys

  OAuthKey.schema.belongsTo(Service.schema); // an OAuthKey belongs to one Service

	SDI.schema.hasMany(User.schema); // a SDI can be seen/administrated by different users
	SDI.schema.hasMany(Zone.schema); // a SDI contains many zone
	SDI.schema.hasMany(Profil.schema); // a SDI can have many profiles
	SDI.schema.belongsTo(ThemeSDI.schema);

	ThemeSDI.schema.belongsTo(ThemeZone.schema);

	Zone.schema.belongsTo(SDI.schema); // a Zone can only belong to one SDI
	Zone.schema.belongsTo(Behaviour.schema); // a Zone has one Behaviour
	Zone.schema.hasMany(CallType.schema); // a Zone has many CallTypes and must be able to reach them for administration
	Zone.schema.hasMany(ZoneContent.schema);
	Zone.schema.belongsTo(ThemeZone.schema);
	//Zone.schema.hasMany(Call.schema); // a Zone has many Calls and must be able to reach them for Client

	CallType.schema.belongsTo(Zone.schema); // a CallType has one Zone
	CallType.schema.belongsTo(Source.schema); // a CallType has one Source
	CallType.schema.belongsTo(Renderer.schema); // a CallType has one Renderer
	CallType.schema.belongsTo(Policy.schema); // a CallType has one ReceivePolicy
	CallType.schema.hasMany(Call.schema);

	Source.schema.belongsTo(InfoType.schema); // a Source has one InfoType
	Source.schema.hasMany(ParamType.schema);  // TODO: a Source can have many ParamType but do we need to be able to reach them ??
	Source.schema.hasMany(ParamValue.schema, {as: 'defaultParam'});
	Source.schema.belongsTo(Service.schema);

	Service.schema.hasMany(Source.schema);

	Renderer.schema.belongsTo(InfoType.schema); // A Renderer has one InfoType

	InfoType.schema.hasMany(Source.schema);  // An InfoType has many Sources
	InfoType.schema.hasMany(Renderer.schema); // an InfoType has many Renderers

	ConstraintParamType.schema.belongsTo(TypeParamType.schema); // A constraint applies only on a specific TypeParamType

	ParamType.schema.belongsTo(TypeParamType.schema, {as: 'type'}); // A paramType has a TypeParamType
	ParamType.schema.belongsTo(ConstraintParamType.schema, {as: 'constraint'});  // A paramType can have a constraint
	ParamType.schema.belongsTo(ParamValue.schema, {as: 'defaultValue'}); // a ParamType can have a default value
  ParamType.schema.hasMany(Source.schema); // a ParamType is used by several Sources
	//ParamType.schema.hasMany(ParamValue.schema); // A paramType has many values TODO: do we need to be able to reach them?

	ParamValue.schema.belongsTo(ParamType.schema); // a ParamValue has one ParamType

	Call.schema.belongsTo(CallType.schema); // a Call has one specific CallTyp
	Call.schema.belongsTo(OAuthKey.schema); // a Call can have one specific OAuthKey
	Call.schema.hasMany(ParamValue.schema); // a Call has many ParamValues

	Profil.schema.hasMany(ZoneContent.schema); // a Profil has many ZoneContents
	Profil.schema.belongsTo(SDI.schema);

	RelativeTimeline.schema.hasMany(RelativeEvent.schema);
	RelativeTimeline.schema.belongsTo(TimelineRunner.schema);
	RelativeTimeline.schema.belongsTo(UserTrigger.schema);
	RelativeTimeline.schema.belongsTo(SystemTrigger.schema);

	AbsoluteTimeline.schema.hasMany(AbsoluteEvent.schema);

	AbsoluteEvent.schema.belongsTo(RelativeTimeline.schema);  // An absolute event has one relative timeline

	RelativeEvent.schema.belongsTo(Call.schema); // A relative event has one call

	ZoneContent.schema.belongsTo(Widget.schema);
	ZoneContent.schema.belongsTo(AbsoluteTimeline.schema);
	ZoneContent.schema.belongsTo(RelativeTimeline.schema);
	ZoneContent.schema.belongsTo(Zone.schema);
  ZoneContent.schema.hasMany(Profil.schema); // a ZoneContent belongs to many Profils

};