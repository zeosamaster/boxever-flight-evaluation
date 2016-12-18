var express = require('express');
var router = express.Router();
var airportsObject = require("../airports.json");

/* GET Cities listing. */
router.get('/', function (req, res, next) {
  var airportsArray = [];
  Object.keys(airportsObject).forEach(function (key) {
    var airport = {};
    airport.id = key;
    airport.name = airportsObject[key];
    airportsArray.push(airport);
  });
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(airportsArray));
});

module.exports = router;