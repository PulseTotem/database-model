var moment = require('moment');

module.exports = function (grunt) {
  'use strict';

  // load extern tasks
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-bumpup');
 /* grunt.loadNpmTasks('grunt-update-json');
  grunt.loadNpmTasks('grunt-npm-install');
  grunt.loadNpmTasks('grunt-express-server');

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-typescript');

  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-yuidoc');
  grunt.loadNpmTasks('grunt-contrib-symlink');
  grunt.loadNpmTasks('grunt-mocha-istanbul');
  grunt.loadNpmTasks('grunt-env');*/


  // tasks
  grunt.initConfig({

    config : grunt.file.readJSON('config/config.json'),

    copy: {
      migrationFile: {
        files: 	[{'migrations/<%= grunt.option("fileName") %>.js': 'config/migrationFile-sample.js'}]
      }
    },

    exec: {
      doMigration: './node_modules/sequelize-cli/bin/sequelize db:migrate',
      undoMigration: './node_modules/sequelize-cli/bin/sequelize db:migrate:undo',
      generateModels: './node_modules/sequelize-auto/bin/sequelize-auto -o "./models" -d <%= config.development.database %> -h <%= config.development.host %> -u <%= config.development.username %> -p <%= config.development.port %> -x <%= config.development.password %> -e <%= config.development.dialect %>'
    },

    clean: {
      models: ["models/*.js", "!models/index.js"]
    },

    bumpup: 'package.json'

/*    coreReposConfig : grunt.file.readJSON('core-repos-config.json'),

// ---------------------------------------------
//                               configure tasks
// ---------------------------------------------
    env : {
      test : {
        NODE_ENV : 'test'
      },
      build : {
        NODE_ENV : 'production'
      }
    },

    symlink: {
      // Enable overwrite to delete symlinks before recreating them
      options: {
        overwrite: true
      },
      // The "build/target.txt" symlink will be created and linked to
      // "source/target.txt". It should appear like this in a file listing:
      // build/target.txt -> ../source/target.txt
      coreBackend: {
        src: '<%= coreReposConfig.coreBackendRepoPath %>',
        dest: 't6s-core/core-backend'
      },
      core: {
        src: '<%= coreReposConfig.coreRepoPath %>',
        dest: 't6s-core/core-backend/t6s-core/core'
      }
    },

    update_json: {
      packageBuild: {
        src: ['t6s-core/core-backend/package.json', 'package.json'],
        dest: 'package-tmp.json',
        fields: [
          'name',
          'version',
          'dependencies',
          'devDependencies',
          'overrides'
        ]
      },
      packageHeroku: {
        src: ['t6s-core/core-backend/package.json', 'package.json'],
        dest: 'heroku/package.json',
        fields: [
          'name',
          'version',
          'dependencies',
          'overrides'
        ]
      }
    },
// ---------------------------------------------

// ---------------------------------------------
//                          build and dist tasks
// ---------------------------------------------
    copy: {
      buildConnectionInfosFile: {
        files: 	[{'build/js/connection_infos.json': 'scripts/core/connection_infos.json'}]
      },
      distConnectionInfosFile: {
        files: 	[{'dist/js/connection_infos.json': 'scripts/core/connection_infos.json'}]
      },
      testConnectionInfosFile: {
        files: 	[{'build/tests/connection_infos.json': 'scripts/core/connection_infos-sample.json'}]
      },

      buildBackendConfigInfosFile: {
        files: 	[{'build/js/backend_config.json': 'scripts/core/backend_config.json'}]
      },
      distBackendConfigInfosFile: {
        files: 	[{'dist/js/backend_config.json': 'scripts/core/backend_config.json'}]
      },
      testBackendConfigInfosFile: {
        files: 	[{'build/tests/backend_config.json': 'scripts/core/backend_config.json'}]
      },

      dbInitFiles : {
        files: 	[{expand: true, cwd: 'dbInitFiles', src: ['**'], dest: 'build/dbInitFiles/'}]
      },

      buildPackageBak: {
        files: 	[{'package-bak.json': 'package.json'}]
      },
      buildPackageReplace: {
        files: 	[{'package.json': 'package-tmp.json'}]
      },
      buildPackageReinit: {
        files: 	[{'package.json': 'package-bak.json'}]
      },

      heroku: {
        files: 	[{expand: true, cwd: 'dist', src: ['**'], dest: 'heroku'}]
      },
      herokuProcfile: {
        files: 	[{expand: true, cwd: '.', src: ['Procfile'], dest: 'heroku'}]
      },
      herokuGitignore: {
        files: 	[{expand: true, cwd: '.', src: ['.gitignore'], dest: 'heroku'}]
      }
    },

    typescript: {
      build: {
        src: [
          'scripts/The6thScreenBackend.ts'
        ],
        dest: 'build/js/The6thScreenBackend.js',
        options: {
          module: 'commonjs',
          basePath: 'scripts'
        }
      },
      dbinit: {
        src: [
          'scripts/CleanAndInitDatabase.ts'
        ],
        dest: 'build/js/CleanAndInitDatabase.js',
        options: {
          module: 'commonjs',
          basePath: 'scripts'
        }
      },
      dist: {
        src: [
          'scripts/The6thScreenBackend.ts'
        ],
        dest: 'dist/js/The6thScreenBackend.js',
        options: {
          module: 'commonjs',
          basePath: 'scripts'
        }
      },
      test: {
        src: [
          'tests/** /*.ts'
        ],
        dest: 'build/tests/Test.js'
      }
    },

    express: {
      options: {
        port: 4000
      },
      build: {
        options: {
          script: 'build/js/The6thScreenBackend.js',
          args: ["loglevel=debug"]
        }
      },
      dist: {
        options: {
          script: 'dist/js/The6thScreenBackend.js',
          args: ["loglevel=error"],
          node_env: 'production'
        }
      }
    },
// ---------------------------------------------





// ---------------------------------------------
//                                 develop tasks
// ---------------------------------------------
    watch: {
      express: {
        files:  [ 'build/js/The6thScreenBackend.js' ],
        tasks:  [ 'express:build' ],
        options: {
          spawn: false
        }
      },

      developServer: {
        files: ['scripts/** /*.ts', 't6s-core/core-backend/scripts/** /*.ts'],
        tasks: ['typescript:build']
      }
    },
// ---------------------------------------------

// ---------------------------------------------
//                                 doc tasks
// ---------------------------------------------
    yuidoc: {
      compile: {
        name: 'The 6th Screen - Backend',
        description: 'Backend for The 6th Screen products.',
        version: '0.0.1',
        url: 'http://www.the6thscreen.fr',
        options: {
          extension: '.ts, .js',
          paths: ['scripts/'],
          outdir: 'doc/'
        }
      }
    },
// ---------------------------------------------

// ---------------------------------------------
//                                 test tasks
// ---------------------------------------------
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          colors: true,
          captureFile: 'build/tests/result.txt'
        },
        src: ['build/tests/Test.js']
      },
      jenkins: {
        options: {
          reporter: 'mocha-jenkins-reporter',
          quiet: false,
          reporterOptions: {
            "junit_report_name": "Tests",
            "junit_report_path": "build/tests/report.xml",
            "junit_report_stack": 1
          }
        },
        src: ['build/tests/Test.js']
      }
    },

    mocha_istanbul: {
      coverage: {
        src: 'build/tests/', // a folder works nicely
        options: {
          mask: '*.js',
          root: 'build/tests/',
          reportFormats: ['cobertura', 'html'],
          coverageFolder: 'build/coverage'
        }
      },
    },
// ---------------------------------------------

// ---------------------------------------------
//                                    clean task
// ---------------------------------------------
    clean: {
      package: ['package-bak.json', 'package-tmp.json'],
      build: ['build/'],
      heroku: ['heroku/'],
      dist: ['dist/'],
      doc: ['doc'],
      test: ['build/tests/Test.js']
    }*/
// ---------------------------------------------
  });

  // register tasks
  grunt.registerTask('default', ['migration']);

  grunt.registerTask('migration', 'Task to manage database migration.', function(arg, arg2) {
    if (arguments.length === 0) {
      grunt.log.writeln('Usage : grunt ' + this.name + ":action");
      grunt.log.writeln('Actions are "new" or "do" or "undo".');
    } else {
      switch(arg) {
        case 'new' :
          var migrationName = "migration"
          if(typeof(arg2) != "undefined" && arg2 != null) {
            migrationName = arg2;
          }

          var now = new moment();
          var fileName = now.format("YYYYMMDDHHmmss_") + migrationName;
          grunt.option("fileName", fileName);
          grunt.task.run(['copy:migrationFile']);
          break;
        case 'do' :
          var generateModels = "false";
          if(typeof(arg2) != "undefined" && arg2 != null) {
            generateModels = arg2;
          }
          if(generateModels == "true") {
            grunt.task.run(['exec:doMigration', 'clean:models', 'exec:generateModels']);
          } else {
            grunt.task.run(['exec:doMigration']);
          }
          break;
        case 'undo' :
          var generateModels = "false";
          if(typeof(arg2) != "undefined" && arg2 != null) {
            generateModels = arg2;
          }
          if(generateModels == "true") {
            grunt.task.run(['exec:undoMigration', 'clean:models', 'exec:generateModels']);
          } else {
            grunt.task.run(['exec:undoMigration']);
          }
          break;
        default :
          grunt.log.writeln('Action "' + arg + '" doesn\'t exist.');
      }
    }
  });



  /*grunt.registerTask('init', ['symlink:coreBackend']);

  grunt.registerTask('initJenkins', ['init','symlink:core']);

  grunt.registerTask('build', function () {
    grunt.task.run(['clean:package', 'clean:build']);

    grunt.task.run(['env:build','update_json:packageBuild', 'copy:buildPackageBak', 'copy:buildPackageReplace', 'npm-install', 'copy:buildPackageReinit', 'copy:buildConnectionInfosFile', 'copy:buildBackendConfigInfosFile', 'typescript:build', 'clean:package']);
  });

  grunt.registerTask('dbinit', function () {
    grunt.task.run(['clean:package', 'clean:build']);

    grunt.task.run(['update_json:packageBuild', 'copy:buildPackageBak', 'copy:buildPackageReplace', 'npm-install', 'copy:buildPackageReinit', 'copy:buildConnectionInfosFile', 'copy:buildBackendConfigInfosFile', 'copy:dbInitFiles', 'typescript:dbinit', 'clean:package']);
  });

  grunt.registerTask('dist', function () {
    grunt.task.run(['clean:package', 'clean:dist']);

    grunt.task.run(['env:build','update_json:packageBuild', 'copy:buildPackageBak', 'copy:buildPackageReplace', 'npm-install', 'copy:buildPackageReinit', 'copy:distConnectionInfosFile', 'copy:distBackendConfigInfosFile', 'typescript:dist', 'clean:package']);
  });

  grunt.registerTask('develop', ['build', 'express:build', 'watch']);

  grunt.registerTask('heroku', function () {
    grunt.task.run(['clean:heroku']);

    grunt.task.run(['dist', 'update_json:packageHeroku', 'copy:heroku', 'copy:herokuProcfile', 'copy:herokuGitignore']);
  });

  grunt.registerTask('doc', ['clean:doc', 'yuidoc']);

  grunt.registerTask('coverage', ['test', 'mochaTest:coverage']);
  grunt.registerTask('initTest', function() {
    grunt.task.run(['clean:build']);

    grunt.task.run(['env:test','update_json:packageBuild', 'copy:buildPackageBak', 'copy:buildPackageReplace', 'npm-install', 'copy:buildPackageReinit','copy:testConnectionInfosFile', 'copy:testBackendConfigInfosFile', 'typescript:build', 'typescript:test']);
  });


  grunt.registerTask('coverage', ['initTest', 'mocha_istanbul:coverage']);
  grunt.registerTask('test', ['initTest', 'mochaTest:test']);

  grunt.registerTask('jenkins', ['initTest', 'mochaTest:jenkins', 'mocha_istanbul:coverage', 'clean:package']);*/

}