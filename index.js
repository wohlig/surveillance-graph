const { isObject } = require("lodash");
var _ = require("lodash");
var fs = require("fs");
var oldFile = require("./data/2954260.json");

var newFile = _.map(oldFile, function (obj) {
  var retObj = {
    d: obj.createdAt,
  };
  if (obj.rateBack) {
    retObj.b = { p: obj.rateBack.price, s: obj.rateBack.size };
  }
  if (obj.rateLay) {
    retObj.l = { p: obj.rateLay.price, s: obj.rateLay.size };
  }
  return retObj;
});

let data = JSON.stringify(newFile);
fs.writeFileSync("compressed/2954260.json", data);
