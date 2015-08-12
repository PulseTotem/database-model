var db = require('../models/index.js');

var api = require('./api.js');

var http = require("http");
var express = require("express");
var bodyParser = require("body-parser");
var epilogue = require("epilogue");

exports.start = function() {
  var app = express();
  app.use(bodyParser.json()); // for parsing application/json
  app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  var httpServer = http.createServer(app);

  //Initialize relation between models and build REST API for models define in api.js file ('hasMany' and 'belongsTo' arrays).
  app.param('originId', function(req, res, next, id) {
    req.originId = id;
    next();
  });

  app.param('targetId', function(req, res, next, id) {
    req.targetId = id;
    next();
  });

  api.hasMany.forEach(function(originTarget) {


    var originName = originTarget[0];
    var origin = db[originName];

    var targetName = originTarget[1];
    var target = db[targetName];

    var options = {constraints: false};
    if(originTarget.length > 2) {
      for (var attrname in originTarget[2]) {
        options[attrname] = originTarget[2][attrname];
      }
    }

    if(typeof(options.as) != "undefined" && (typeof(options.as.singular) == "undefined" || typeof(options.as.plural) == "undefined")) {
      console.error("'hasMany' definition between '" + originName + "' and '" + targetName + "' : If you give 'as' option, you need to provide singular and plural values.");
      process.exit(1);
    }

    origin.hasMany(target, options);

    //For a HasMany relation : Endpoint to retrieve all target instances attached to origin instance
    app.get('/' + originName + '/:originId/' + targetName, function(req, res) {
      //console.log('hasMany - get : /' + originName + '/' + req.originId + '/' + targetName);

      var methodAttributeName = target.options.name.plural;
      if(typeof(options.as) != "undefined") {
        methodAttributeName = options.as.plural;
      }

      origin.find(req.originId)
        .then(function(originInstance) {
          if(originInstance != null) {
            originInstance['get' + methodAttributeName]().then(function(targetInstances) {
              var result = [];

              targetInstances.forEach(function(targetInstance) {
                result.push(targetInstance.dataValues);
              });

              res.json(result);
            }).catch(function(error) {
              res.status(500).send({'error': JSON.stringify(error)});
            });
          } else {
            res.status(404).send({'error': originName + ' with given Id "' + req.originId + '" was not found.'});
          }
        })
        .catch(function(error) {
          res.status(500).send({'error': JSON.stringify(error)});
        });
    });

    //For a HasMany relation : Endpoint to add a new target instance to origin instance
    app.put('/' + originName + '/:originId/' + targetName + '/:targetId', function(req, res) {
      //console.log('hasMany - put : /' + originName + '/' + req.originId + '/' + targetName + '/' + req.targetId);

      var methodAttributeName = target.options.name.singular;
      if(typeof(options.as) != "undefined") {
        methodAttributeName = options.as.singular;
      }

      origin.find(req.originId)
        .then(function(originInstance) {
          if(originInstance != null) {
            target.find(req.targetId)
              .then(function(targetInstance) {
                if(targetInstance != null) {
                  originInstance['add' + methodAttributeName](targetInstance).then(function() {
                    res.json({});
                  }).catch(function(error) {
                    res.status(500).send({'error': JSON.stringify(error)});
                  });
                } else {
                  res.status(404).send({'error': targetName + ' with given Id "' + req.targetId + '" was not found.'});
                }
              })
              .catch(function(error) {
                res.status(500).send({'error': JSON.stringify(error)});
              });
          } else {
            res.status(404).send({'error': originName + ' with given Id "' + req.originId + '" was not found.'});
          }
        })
        .catch(function(error) {
          res.status(500).send({'error': JSON.stringify(error)});
        });


    });

    //For a HasMany relation : Endpoint to remove a target instance to origin instance
    app.delete('/' + originName + '/:originId/' + targetName + '/:targetId', function(req, res) {
      //console.log('hasMany - delete : /' + originName + '/' + req.originId + '/' + targetName + '/' + req.targetId);

      var methodAttributeName = target.options.name.singular;
      if(typeof(options.as) != "undefined") {
        methodAttributeName = options.as.singular;
      }

      origin.find(req.originId)
        .then(function(originInstance) {
          if(originInstance != null) {
            target.find(req.targetId)
              .then(function(targetInstance) {
                if(targetInstance != null) {
                  originInstance['remove' + methodAttributeName](targetInstance).then(function() {
                    res.json({});
                  }).catch(function(error) {
                    res.status(500).send({'error': JSON.stringify(error)});
                  });
                } else {
                  res.status(404).send({'error': targetName + ' with given Id "' + req.targetId + '" was not found.'});
                }
              })
              .catch(function(error) {
                res.status(500).send({'error': JSON.stringify(error)});
              });
          } else {
            res.status(404).send({'error': originName + ' with given Id "' + req.originId + '" was not found.'});
          }
        })
        .catch(function(error) {
          res.status(500).send({'error': JSON.stringify(error)});
        });
    });
  });

  api.belongsTo.forEach(function(originTarget) {
    var originName = originTarget[0];
    var origin = db[originName];

    var targetName = originTarget[1];
    var target = db[targetName];

    var options = {constraints: false};
    if(originTarget.length > 2) {
      for (var attrname in originTarget[2]) {
        options[attrname] = originTarget[2][attrname];
      }
    }

    origin.belongsTo(target, options);

    //For a BelongsTo relation : Endpoint to retrieve all target instances attached to origin instance
    app.get('/' + originName + '/:originId/' + targetName, function(req, res) {
      //console.log('belongsTo - get : /' + originName + '/' + req.originId + '/' + targetName);

      var methodAttributeName = target.options.name.singular;
      if(typeof(options.as) != "undefined") {
        methodAttributeName = options.as;
      }

      origin.find(req.originId)
        .then(function(originInstance) {
          if(originInstance != null) {
            originInstance['get' + methodAttributeName]().then(function(targetInstance) {
              res.json(targetInstance.dataValues);
            }).catch(function(error) {
              if(JSON.stringify(error) == "{}") {
                res.json([]);
              } else {
                res.status(500).send({'error': JSON.stringify(error)});
              }
            });
          } else {
            res.status(404).send({'error': originName + ' with given Id "' + req.originId + '" was not found.'});
          }
        })
        .catch(function(error) {
          res.status(500).send({'error': JSON.stringify(error)});
        });
    });

    //For a BelongsTo relation : Endpoint to set a target instance to origin instance
    app.put('/' + originName + '/:originId/' + targetName + '/:targetId', function(req, res) {
      //console.log('belongsTo - put : /' + originName + '/' + req.originId + '/' + targetName + '/' + req.targetId);

      var methodAttributeName = target.options.name.singular;
      if(typeof(options.as) != "undefined") {
        methodAttributeName = options.as;
      }

      origin.find(req.originId)
        .then(function(originInstance) {
          if(originInstance != null) {
            target.find(req.targetId)
              .then(function(targetInstance) {
                if(targetInstance != null) {
                  originInstance['set' + methodAttributeName](targetInstance).then(function() {
                    res.json({});
                  }).catch(function(error) {
                    res.status(500).send({'error': JSON.stringify(error)});
                  });
                } else {
                  res.status(404).send({'error': targetName + ' with given Id "' + req.targetId + '" was not found.'});
                }
              })
              .catch(function(error) {
                res.status(500).send({'error': JSON.stringify(error)});
              });
          } else {
            res.status(404).send({'error': originName + ' with given Id "' + req.originId + '" was not found.'});
          }
        })
        .catch(function(error) {
          res.status(500).send({'error': JSON.stringify(error)});
        });

    });

    //For a BelongsTo relation : Endpoint to unset a target instance to origin instance if it's the right target instance
    app.delete('/' + originName + '/:originId/' + targetName + '/:targetId', function(req, res) {
      //console.log('belongsTo - delete : /' + originName + '/' + req.originId + '/' + targetName + '/' + req.targetId);

      var methodAttributeName = target.options.name.singular;
      if(typeof(options.as) != "undefined") {
        methodAttributeName = options.as;
      }

      origin.find(req.originId)
        .then(function(originInstance) {
          if(originInstance != null) {
            originInstance['get' + methodAttributeName]().then(function(targetInstance) {
              if(targetInstance != null && targetInstance.id == req.targetId) {
                originInstance['set' + methodAttributeName](null).then(function() {
                  res.json({});
                }).catch(function(error) {
                  res.status(500).send({'error': JSON.stringify(error)});
                });
              } else {
                res.status(500).send({'error': targetName + ' with id "' + req.targetId + '" is not linked to ' + originName + ' with id "' + req.originId + '"'});
              }

              res.json(targetInstance.dataValues);
            }).catch(function(error) {
              res.status(500).send({'error': JSON.stringify(error)});
            });
          } else {
            res.status(404).send({'error': originName + ' with given Id "' + req.originId + '" was not found.'});
          }
        })
        .catch(function(error) {
          res.status(500).send({'error': JSON.stringify(error)});
        });
    });
  });


  // Initialize epilogue
  epilogue.initialize({
    app: app,
    sequelize: db.sequelize
  });

  //Build REST API for models define in api.js file ('models' array).
  api.models.forEach(function(modelName) {
    var model = db[modelName];
    epilogue.resource({
      model: model,
      endpoints: ['/' + modelName, '/' + modelName + '/:id']
    });
  });

  // Link to database and listen
  db.sequelize
    .sync()
    .then(function() {
      var listeningPort = process.env.PORT || 3000;

      httpServer.listen(listeningPort, function() {
        var port = httpServer.address().port;

        console.log("Server listening on *: %s", port);
      });
    });
};