"use strict";
var _ = require("underscore");
var result = _.range(1000)
    .filter(function (a) { return a % 3 == 0 || a % 5 == 0; })
    .reduce(function (a, b) { return a + b; });
console.log(result);
