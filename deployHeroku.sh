#!/bin/bash

if [ -z $1 ]
then
  echo "Give a heroku app name."
  exit 1
fi

#heroku login
current=$(pwd)
herokuDir="$current-heroku"
rm -rf $herokuDir
mkdir $herokuDir
cd $herokuDir
heroku git:clone -a $1 .
heroku ps:scale web=0
rm -rf ./*
cd $current

### Copy : Config directory ###
mkdir $herokuDir/config
cp -r ./config/config_sample.json $herokuDir/config/config.json
### Copy : Database directory ###
mkdir $herokuDir/database
cp -r ./database/* $herokuDir/database
### Copy : Models directory ###
mkdir $herokuDir/models
cp -r ./models/* $herokuDir/models
### Copy : app.js & package.json files ###
cp app.js $herokuDir
cp package.json $herokuDir
### Manage : Procfile file ###
cp Procfile $herokuDir

cd $herokuDir
commitMess=`date +"%D %T"`
git add .
git commit -a -m "v $commitMess"
heroku config:set NPM_CONFIG_PRODUCTION=true
git push heroku master
heroku ps:scale web=1

#####
#
# Add database-dev add-on to dyno :
# heroku addons:add heroku-postgresql:hobby-dev
#
#####