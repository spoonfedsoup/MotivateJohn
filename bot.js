var Twit = require('twit');
var express = require('express');
var config = require('./config.js');
var fs = require('fs');

var t = new Twit(config)

fs.writeFile("tweets","seting up \n",function(err){});

var stream = t.stream('statuses/filter', {track:'#philly'})
console.log("Listening");
stream.on('tweet',function(tweet){
  console.log(tweet);
  fs.appendFile("tweets",JSON.stringify(tweet),function(err){});
 });
