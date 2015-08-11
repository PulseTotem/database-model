exports.models = [];

exports.models = [];
exports.models = [];



/*var db = require('../models/index.js');

var AbsoluteEvent = db['AbsoluteEvents'],
  AbsoluteTimeline = db['AbsoluteTimelines'],
  AuthorizedClient = db['AuthorizedClients'],
  Behaviour = db['Behaviours'],
  Call = db['Calls'],
  CallType = db['CallTypes'],
  Client = db['Clients'],
  ConstraintParamType = db['ConstraintParamTypes'],
  InfoType = db['InfoTypes'],
  OAuthKey = db['OAuthKeys'],
  ParamType = db['ParamTypes'],
  ParamValue = db['ParamValues'],
  Policy = db['Policies'],
  Profil = db['Profils'],
  RelativeEvent = db['RelativeEvents'],
  RelativeTimeline = db['RelativeTimelines'],
  Renderer = db['Renderers'],
  Role = db['Roles'],
  SDI = db['SDIs'],
  Service = db['Services'],
  Source = db['Sources'],
  SystemTrigger = db['SystemTriggers'],
  TimelineRunner = db['TimelineRunners'],
  ThemeSDI = db['ThemeSDIs'],
  ThemeZone = db['ThemeZones'],
  TypeParamType = db['TypeParamTypes'],
  User = db['Users'],
  UserTrigger = db['UserTriggers'],
  ZoneContent = db['ZoneContents'],
  Zone = db['Zones'];

exports.init = function() {
  User.hasMany(Role); // a user has different roles
  User.hasMany(SDI);  // a user has access to different SDI's
  User.hasMany(OAuthKey);  // a user has access to different OAuthKeys

  OAuthKey.belongsTo(Service); // an OAuthKey belongs to one Service

  SDI.hasMany(User); // a SDI can be seen/administrated by different users
  SDI.hasMany(Zone); // a SDI contains many zone
  SDI.hasMany(Profil); // a SDI can have many profiles
  SDI.belongsTo(ThemeSDI);
  SDI.hasMany(AuthorizedClient);

  ThemeSDI.belongsTo(ThemeZone);

  AuthorizedClient.belongsTo(SDI);
  AuthorizedClient.belongsTo(Profil);
  Client.belongsTo(Profil);


  Zone.belongsTo(SDI); // a Zone can only belong to one SDI
  Zone.belongsTo(Behaviour); // a Zone has one Behaviour
  Zone.hasMany(CallType); // a Zone has many CallTypes and must be able to reach them for administration
  Zone.hasMany(ZoneContent);
  Zone.belongsTo(ThemeZone);
  //Zone.hasMany(Call); // a Zone has many Calls and must be able to reach them for Client

  CallType.belongsTo(Zone); // a CallType has one Zone
  CallType.belongsTo(Source); // a CallType has one Source
  CallType.belongsTo(Renderer); // a CallType has one Renderer
  CallType.belongsTo(Policy); // a CallType has one ReceivePolicy
  CallType.hasMany(Call);

  Source.belongsTo(InfoType); // a Source has one InfoType
  Source.hasMany(ParamType);  // TODO: a Source can have many ParamType but do we need to be able to reach them ??
  Source.hasMany(ParamValue, {as: 'defaultParam'});
  Source.belongsTo(Service);
  Source.hasMany(CallType);

  Service.hasMany(Source);

  Renderer.belongsTo(InfoType); // A Renderer has one InfoType

  InfoType.hasMany(Source);  // An InfoType has many Sources
  InfoType.hasMany(Renderer); // an InfoType has many Renderers

  ConstraintParamType.belongsTo(TypeParamType); // A constraint applies only on a specific TypeParamType

  ParamType.belongsTo(TypeParamType, {as: 'type'}); // A paramType has a TypeParamType
  ParamType.belongsTo(ConstraintParamType, {as: 'constraint'});  // A paramType can have a constraint
  ParamType.belongsTo(ParamValue, {as: 'defaultValue'}); // a ParamType can have a default value
  ParamType.hasMany(Source); // a ParamType is used by several Sources
  //ParamType.hasMany(ParamValue); // A paramType has many values TODO: do we need to be able to reach them?

  ParamValue.belongsTo(ParamType); // a ParamValue has one ParamType

  Call.belongsTo(CallType); // a Call has one specific CallTyp
  Call.belongsTo(OAuthKey); // a Call can have one specific OAuthKey
  Call.hasMany(ParamValue); // a Call has many ParamValues

  Profil.hasMany(ZoneContent); // a Profil has many ZoneContents
  Profil.belongsTo(SDI);
  Profil.hasMany(AuthorizedClient);
  Profil.hasMany(Client);

  RelativeTimeline.hasMany(RelativeEvent);
  RelativeTimeline.belongsTo(TimelineRunner);
  RelativeTimeline.belongsTo(UserTrigger);
  RelativeTimeline.belongsTo(SystemTrigger);

  AbsoluteTimeline.hasMany(AbsoluteEvent);

  AbsoluteEvent.belongsTo(RelativeTimeline);  // An absolute event has one relative timeline

  RelativeEvent.belongsTo(Call); // A relative event has one call

  ZoneContent.belongsTo(AbsoluteTimeline);
  ZoneContent.belongsTo(RelativeTimeline);
  ZoneContent.belongsTo(Zone);
  ZoneContent.hasMany(Profil); // a ZoneContent belongs to many Profils
};*/