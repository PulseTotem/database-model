exports.models = [
  'AbsoluteEvents',
  'AbsoluteTimelines',
  'Behaviours',
  'Calls',
  'CallTypes',
  'ConstraintParamTypes',
  'InfoTypes',
  'OAuthKeys',
  'ParamTypes',
  'ParamValues',
  'Policies',
  'Profils',
  'Providers',
  'RelativeEvents',
  'RelativeTimelines',
  'Renderers',
  'RendererThemes',
  'SDIs',
  'Services',
  'Sources',
  'SystemTriggers',
  'Teams',
  'TimelineRunners',
  'ThemeSDIs',
  'ThemeZones',
  'TypeParamTypes',
  'Users',
  'UserTriggers',
  'ZoneContents',
  'Zones'
];

exports.hasMany = [
  ['Teams', 'Users'], // a Team has many Users
  ['Users', 'Teams'], // a user belongs to many Teams
  ['Teams', 'SDIs'], // a Team has access to different SDI's

  ['Users', 'OAuthKeys'], // a user has access to different OAuthKeys

  ['Teams', 'OAuthKeys'], // a Team has access to different OAuthKeys
  ['OAuthKeys', 'Teams'], // an OAuthKey belongs to many Teams

  ['SDIs', 'Zones'], // a SDI contains many zone
  ['SDIs', 'Profils'], // a SDI can have many profiles

  ['Zones', 'CallTypes'], // a Zone has many CallTypes and must be able to reach them for administration
  ['Zones', 'ZoneContents'],

  ['CallTypes', 'Calls'],

  ['Sources', 'ParamTypes'], // TODO: a Source can have many ParamType but do we need to be able to reach them ??
  ['Sources', 'ParamValues', {as: { singular: 'DefaultParam', plural: 'DefaultParams' }}],
  ['Sources', 'CallTypes'],

  ['Services', 'Sources'],

  ['Providers', 'Sources'], // a Provider can be attached to multiple Sources

  ['InfoTypes', 'Sources'], // An InfoType has many Sources
  ['InfoTypes', 'Renderers'], // an InfoType has many Renderers

  ['ParamTypes', 'Sources'], // a ParamType is used by several Sources

  ['Calls', 'ParamValues'], // a Call has many ParamValues

  ['Profils', 'ZoneContents'], // a Profil has many ZoneContents

  ['RelativeTimelines', 'RelativeEvents'],

  ['Renderers', 'RendererThemes'],

  ['AbsoluteTimelines', 'AbsoluteEvents'],

  ['ZoneContents', 'Profils'] // a ZoneContent belongs to many Profils

  //['CMSRepositories', 'Users'], // a CMSRepository can be seen/administrated by different users
  //['Users', 'CMSRepositories'], // a User can have access to many CMSRepositories
  //['Users', 'CMSFiles', {as: { singular: 'UploadedFile', plural: 'UploadedFiles' }}],
  //['CMSRepositories', 'CMSFiles']
];

exports.belongsTo = [
  ['Teams', {model : 'Users', as: 'Owners'}, {as: 'Owner', foreignKey: 'OwnerId'}],
  ['Users', {model: 'Teams', as: 'DefaultTeams'}, {as: 'DefaultTeam', foreignKey: 'DefaultTeamId'}],

  ['SDIs', 'Teams'], // a SDI can be seen/administrated by only one Team

  ['OAuthKeys', 'Providers'], // an OAuthKey belongs to one Provider

  ['SDIs', 'ThemeSDIs'],

  ['ThemeSDIs', 'ThemeZones'],

  ['Zones', 'SDIs'], // a Zone can only belong to one SDI
  ['Zones', 'Behaviours'], // a Zone has one Behaviour
  ['Zones', 'ThemeZones'],

  ['CallTypes', 'Zones'], // a CallType has one Zone
  ['CallTypes', 'Sources'], // a CallType has one Source
  ['CallTypes', 'Renderers'], // a CallType has one Renderer
  ['CallTypes', 'RendererThemes'], // a CallType has one RendererTheme
  ['CallTypes', 'Policies'], // a CallType has one ReceivePolicy

  ['Sources', 'InfoTypes'], // a Source has one InfoType
  ['Sources', 'Services'], // a Source belongs to a Service
  ['Sources', 'Providers'], // a Source can be attached to one Provider

  ['Renderers', 'InfoTypes'], // A Renderer has one InfoType
  ['RendererThemes', 'Renderers'],

  ['ConstraintParamTypes', 'TypeParamTypes'], // A constraint applies only on a specific TypeParamType

  ['ParamTypes', 'TypeParamTypes', {as: 'Type', foreignKey: 'TypeParamTypeId'}], // A paramType has a TypeParamType
  ['ParamTypes', 'ConstraintParamTypes', {as: 'Constraint', foreignKey: 'ConstraintParamTypeId'}], // A paramType can have a constraint
  ['ParamTypes', 'ParamValues', {as: 'DefaultValue', foreignKey: 'ParamValueId'}], // a ParamType can have a default value,

  ['ParamValues', 'ParamTypes'], // a ParamValue has one ParamType

  ['Calls', 'CallTypes'], // a Call has one specific CallType
  ['Calls', 'OAuthKeys'], // a Call can have one specific OAuthKey
  ['Calls', 'RendererThemes'], // a Call has one specific RendererTheme

  ['Profils', 'SDIs'],

  ['RelativeTimelines', 'TimelineRunners'],
  ['RelativeTimelines', 'UserTriggers'],
  ['RelativeTimelines', 'SystemTriggers'],

  ['RelativeEvents', 'Calls'], // A relative event has one call

  ['AbsoluteEvents', 'RelativeTimelines'], // An absolute event has one relative timeline

  ['ZoneContents', 'AbsoluteTimelines'],
  ['ZoneContents', 'RelativeTimelines'],
  ['ZoneContents', 'Zones'],
  //['CMSFiles', 'Users', {as: 'UploadedBy', foreignKey: 'UserId'}],
  //['CMSFiles', 'CMSRepositories'],

  ['Calls', 'Calls', {as: 'CloneOrigine', foreignKey: 'CloneOrigineId'}],
  ['CallTypes', 'CallTypes', {as: 'CloneOrigine', foreignKey: 'CloneOrigineId'}],
  ['ParamValues', 'ParamValues', {as: 'CloneOrigine', foreignKey: 'CloneOrigineId'}],
  ['Profils', 'Profils', {as: 'CloneOrigine', foreignKey: 'CloneOrigineId'}],
  ['RelativeEvents', 'RelativeEvents', {as: 'CloneOrigine', foreignKey: 'CloneOrigineId'}],
  ['RelativeTimelines', 'RelativeTimelines', {as: 'CloneOrigine', foreignKey: 'CloneOrigineId'}],
  ['SDIs', 'SDIs', {as: 'CloneOrigine', foreignKey: 'CloneOrigineId'}],
  ['ZoneContents', 'ZoneContents', {as: 'CloneOrigine', foreignKey: 'CloneOrigineId'}],
  ['Zones', 'Zones', {as: 'CloneOrigine', foreignKey: 'CloneOrigineId'}]
];