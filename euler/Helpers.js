var RayMitchell;
(function (RayMitchell) {
    var Euler;
    (function (Euler) {
        function* range(begin, end, interval) {
            if (interval === void 0) { interval = 1; }
            for (var i = begin; i < end; i += interval) {
                yield i;
            }
        }
        Euler.range = range;
    })(Euler = RayMitchell.Euler || (RayMitchell.Euler = {}));
})(RayMitchell || (RayMitchell = {}));
