import Helper from "../helpers/EulerHelper"

/**
 * If we list all the natural numbers below 10 that are multiples of 3 or 5,
 * we get 3, 5, 6 and 9. The sum of these multiples is 23.
 *
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */
class Problem1 {
    static solve(): number {
        return Array.from(Helper.range(1, 1000))
            .filter(a => a % 3 === 0 || a % 5 === 0)
            .reduce((acc, a) => acc + a, 0);
    }
}

export default Problem1;