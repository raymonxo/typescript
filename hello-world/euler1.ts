import _ = require("underscore");

let result = _.range(1000)
  .filter(a => a % 3 == 0 || a % 5 == 0)
  .reduce((a, b) => a + b );
console.log(result);  // 233168
