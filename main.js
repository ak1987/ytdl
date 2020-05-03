import "core-js/stable";
import "regenerator-runtime/runtime";

const ytdl = require('ytdl-core');

ytdl.getInfo("YySiE8DsQ0M").then(function(value) {
  // success
  console.log(value)
}, function(reason) {
  // failure
  console.log(reason)
});