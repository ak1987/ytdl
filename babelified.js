"use strict";

/*import "core-js/stable";
import "regenerator-runtime/runtime";*/
var ytdl = require('ytdl-core');

ytdl.getInfo("YySiE8DsQ0M").then(function (value) {
  // выполнение
  console.log(value);
}, function (reason) {
  // отказ
  console.log(reason);
});
