var RayMitchell;
(function (RayMitchell) {
    var Euler;
    (function (Euler) {
        /**
         * Return iterator ranging from begin to end (non-inclusive) stepping by interval.
         */
        function* range(begin, end, interval = 1) {
            for (let i = begin; i < end; i += interval) {
                yield i;
            }
        }
        Euler.range = range;
    })(Euler = RayMitchell.Euler || (RayMitchell.Euler = {}));
})(RayMitchell || (RayMitchell = {}));
/// <reference path="Helpers.ts" />
var RayMitchell;
(function (RayMitchell) {
    var Euler;
    (function (Euler) {
        class Problem1 {
            static solve() {
                return Array.from(Euler.range(1, 1000))
                    .filter(x => x % 3 === 0 || x % 5 === 0)
                    .reduce((acc, x) => acc + x, 0);
            }
        }
        Euler.Problem1 = Problem1;
    })(Euler = RayMitchell.Euler || (RayMitchell.Euler = {}));
})(RayMitchell || (RayMitchell = {}));
/// <reference path="Problem1.ts" />
var Euler = RayMitchell.Euler;
console.log("Problem 1 answer correct (233168)? " + (Euler.Problem1.solve() === 233168));
