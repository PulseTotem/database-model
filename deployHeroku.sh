#!/bin/bash

if [ -z $1 ]
then
  echo "Give a heroku app name."
  exit 1
fi

if [ -z $2 ]
then
  echo "Give a 'drop' status."
  exit 1
fi

heroku login
current=$(pwd)
herokuDir="$current-heroku"
rm -rf $herokuDir
mkdir $herokuDir
cd $herokuDir
heroku git:clone -a $1 .
heroku ps:scale web=0
cd $current
### Copy : Database directory ###
mkdir $herokuDir/database
cp -r ./database/* $herokuDir/database
### Copy : Tables directory ###
mkdir $herokuDir/tables
cp -r ./database/* $herokuDir/tables
### Copy : app.js & package.json files ###
cp app.js $herokuDir
cp package.json $herokuDir
### Manage : Procfile file ###
if [ "$2" == "true" ]
then
  cp ProcfileDropTrue $herokuDir/Procfile
else
  cp ProcfileDropFalse $herokuDir/Procfile
fi
cd $herokuDir
commitMess=`date +"%D %T"`
git add .
git commit -m "v $commitMess"
heroku config:set NPM_CONFIG_PRODUCTION=false
git push heroku master
heroku ps:scale web=1