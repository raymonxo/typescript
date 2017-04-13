/// <reference path="Helpers.ts" />

namespace RayMitchell.Euler {
    export class Problem1 {
        public static solve(): number {
            return Array.from(range(1, 1000))
                .filter(x => x % 3 === 0 || x % 5 === 0)
                .reduce((acc, x) => acc + x, 0);
        }
    }
}