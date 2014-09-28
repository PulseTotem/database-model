var express   = require('express'),
	connection = require('./database/connection.js'),
	http      = require('http'),
	restful   = require('sequelize-restful'),
	relations = require('./database/relations.js'),
	defaultDatas = require('./database/defaultDatas.js'),
	app = express();

relations.init();

var dropDatabase = true;

if(process.argv.length > 2) {
    var param = process.argv[2];
    var keyVal = param.split("=");
    if(keyVal.length > 1) {
        if (keyVal[0] == "drop") {
            if(keyVal[1] == "true") {
                dropDatabase = true;
            } else {
                dropDatabase = false;
            }
        }
    }
}

if(dropDatabase) {
    connection.sequelize.sync({force: true}).success(function () {
        console.log("Base created !");
    });
}

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
