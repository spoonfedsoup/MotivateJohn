var Twit = require('twit');
var express = require('express');
var config = require('./config.js');
var fs = require('fs');
var tweets = require('./tweets.JSON');

var t = new Twit(config)
var i = 0;


var stream = t.stream('statuses/filter', {track:'#philly'})
console.log("Listening");
stream.on('tweet',function(tweet){
  console.log("Tweet recieved");
  tweets[i] = tweet;
  i++;
  fs.writeFile("tweets.JSON",tweets);
 });

function stringit(tweet){
  var str = JSON.stringify(tweet);
  str = str + "\n";
  return str;
}
