/// <reference path="Helpers.ts" />

namespace RayMitchell.Euler {
    export class Problem1 {
        public static solve(): number {
            // TODO: Find or implement library allowing functional methods directly on iterators.
            //       This will eliminate need to create array from iterator.
            return Array.from(range(1, 1000))
                .filter(x => x % 3 === 0 || x % 5 === 0)
                .reduce((acc, x) => acc + x, 0);
        }
    }
}