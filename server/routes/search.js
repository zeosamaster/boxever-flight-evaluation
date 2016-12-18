var express = require('express');
var router = express.Router();
var rn = require('random-number');
var moment = require('moment');
var airportsObject = require("../airports.json");
var gen = rn.generator({
                         min: 20,
                         max: 1000,
                         integer: true
                       });

var airlinesArray = [
  {
    "airlineName": "British Airways",
    "flightNumberPrefix": "BA"
  },
  {
    "airlineName": "Aer Lingus",
    "flightNumberPrefix": "AL"
  },
  {
    "airlineName": "City Jet",
    "flightNumberPrefix": "CJ"
  },
  {
    "airlineName": "Air France",
    "flightNumberPrefix": "AF"
  },
  {
    "airlineName": "Ryan Air",
    "flightNumberPrefix": "RA"
  }
];

var aircraftTypesArray = ["320", "32A", "319", "777", "747", "AR8"];

function __getRandomAirline() {
  return airlinesArray[Math.floor(Math.random() * 5)];
}

function __getRandomAircraftTypes() {
  return aircraftTypesArray[Math.floor(Math.random() * 6)];
}

function __getRandomDateAndTimeString(date) {
  var inputDate = moment(date);
  var minHour, minMinute;
  if (inputDate.isSame(moment(), 'day')) {
    minHour = inputDate.hour();
  } else {
    minHour = 0;
  }
  return inputDate.hour(gen(minHour + 1, 24)).minute(Math.floor(gen(0, 60) / 5) * 5).second(
      0).format();
}

function __getEndDateTime(startDateTime, duration) {
  return moment(startDateTime).add(duration, 'minutes').format();
}

/* GET search listing. */
router.get('/', function (req, res, next) {
  var results = [];
  var step;
  for (step = 0; step < gen(10, 20); step++) {
    var airline = __getRandomAirline();
    var result = {};
    result["airlineName"] = airline.airlineName;
    result["flightNumber"] = airline.flightNumberPrefix + gen(100, 1000);
    result["aircraftType"] = __getRandomAircraftTypes();
    result["flightDurationInMins"] = gen(10, 23) * 5;
    result["adultFare"] = gen(25, 300);
    result["totalFare"] = result["adultFare"] * req.query.pax;
    result["fromId"] = req.query.from;
    result["from"] = airportsObject[req.query.from];
    result["toId"] = req.query.to;
    result["to"] = airportsObject[req.query.to];
    result["pax"] = req.query.pax;
    result["startDateTime"] = __getRandomDateAndTimeString(req.query.date);
    result["endDateTime"] =
        __getEndDateTime(result["startDateTime"], result["flightDurationInMins"]);

    results.push(result);
  }
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(results));
});

module.exports = router;