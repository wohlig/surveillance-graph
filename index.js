var moment = require("moment");
var _ = require("lodash");
var fs = require("fs");
var oldFile = require("./data/2954260.json");
var oldBack = 0;
var oldLay = 0;
var newFile = _.map(oldFile, function (obj) {
  var retObj = {
    d: moment(obj.createdAt).unix(),
  };
  if (obj.rateBack) {
    retObj.b = obj.rateBack.price;
    oldBack = retObj.b;
  } else {
    retObj.b = oldBack;
  }
  if (obj.rateLay) {
    retObj.l = obj.rateLay.price;
    oldLay = retObj.l;
  } else {
    retObj.l = oldLay;
  }
  return retObj;
});

let data = JSON.stringify(newFile);
fs.writeFileSync("compressed/2954260.json", data);
