const { isObject } = require("lodash");
var _ = require("lodash");
var oldFile = require("./data/2954260.json");

var newFile = _.map(oldFile, function (obj) {
  var retObj = {
    d: obj.createdAt,
    b: { p: obj.rateBack.price, s: obj.rateBack.size },
    l: { p: obj.rateLay.price, s: obj.rateLay.size },
  };
});

let data = JSON.stringify(newFile);
fs.writeFileSync("compressed/2954260.json", data);
