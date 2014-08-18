var express   = require('express'),
	connection = require('./connection.js'),
	http      = require('http'),
	restful   = require('sequelize-restful'),
	Call = require('./schemas/call.js'),
	CallType = require('./schemas/callType.js'),
	InfoType = require('./schemas/infoType.js'),
	ParamType = require('./schemas/paramType.js'),
	ParamValue = require('./schemas/paramValue.js'),
	Profil = require('./schemas/profil.js'),
	ReceivePolicy = require('./schemas/receivePolicy.js'),
	Renderer = require('./schemas/renderer.js'),
	RenderPolicy = require('./schemas/renderPolicy.js'),
	Role = require('./schemas/role.js'),
	SDI = require('./schemas/sdi.js'),
	Source = require('./schemas/source.js'),
	Timeline = require('./schemas/timeline.js'),
	User = require('./schemas/user.js'),
	Zone = require('./schemas/zone.js'),
	app = express();

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

Source.schema.hasOne(InfoType.schema);
Source.schema.hasMany(ParamType.schema);
Source.schema.hasMany(ParamValue.schema);

Renderer.schema.hasOne(InfoType.schema);

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

connection.sequelize.sync({force: true}).success(function() {
	console.log("base created !");
})

//app.configure(function() {
	app.use(restful(connection.sequelize, { /* options */ }))
//})

http.createServer(app).listen(3000, function(){
	console.log("Express server listening on port " + 3000)
})


/*
var Sequelize = require('sequelize')
	, sequelize = new Sequelize('testseq', 'the6thscreen', 'yourcast', {
		dialect: "postgres", // or 'sqlite', 'postgres', 'mariadb'
		port: 5432 // or 5432 (for postgres)
	});

sequelize
	.authenticate()
	.complete(function(err) {
		if (!!err) {
			console.log('Unable to connect to the database:', err)
		} else {
			console.log('Connection has been established successfully.')
		}
	});



var chainer = new Sequelize.Utils.QueryChainer;



chainer.add(sequelize.sync({force: true}));


var sdi1 = SDI.create({
	description: 'un nouveau SDI qui roxxe!',
	allowedHost: 'everywhere'
});

var john = User.create({
	username: 'John Bidule',
	password: '12345'
});


chainer.add(sdi1);
chainer.add(john);

chainer.add(SDI.find({where: {allowedHost: 'everywhere'}}).success(function(sdi) {
	User.find({where: {username: 'John Bidule'}}).success(function(user) {
		sdi.addUser(user);
		//user.addSDI(sdi);
	});
}));
*/

/*sequelize.sync({force: true})  // it drops all tables!
	.success(function() {
		SDI.create({
			description: 'mon super SDI',
			allowedHost: '*'
		}).success(function(sdi) {
			console.log("New SDI created");
			//sdi1 = sdi;

			User.create({
				username: 'john-doe',
				password: 'test'
			}).success(function(user) {
				console.log("New user created");


				user.addSDI(sdi).success(function() {
					console.log("Objects associated!");
				});

				sdi.addUser(user).success(function() {
					console.log("Objects associated !")
				});



				sdi.createUser({
					username: 'toto',
					password: 'tata'
				}).success(function(userToto) {
					console.log("new user created and associated !");
					//userToto.addSDI(sdi);


				});

			}).failure(function(err) {
				console.log("Bug avec John");
				console.log(err);
			});


		}).failure(function(err) {
			console.log("Oups petit probleme");
			console.log(err);
		});
}); */

/*
chainer
	.runSerially()
	.success(function(){
		console.log("everything's ok!");
	})
	.error(function(errors){
		console.log("ohoh there's a problem");
		console.log(errors);
	});

*/

/*var john;

User.create({
	username: 'john-doe',
	password: 'test'
}).success(function(user) {
	console.log("New user created");
	john = user;
});*/
